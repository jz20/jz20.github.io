import sys
import os
import json
import fileinput

def get_sys_arguments():
    
    if len(sys.argv) != 3:
        sys.exit("Error: add_topic requires 2 arguments - topic_id, topic_name")
    
    topic_id = sys.argv[1]
    topic_name = sys.argv[2]

    try:
        topic_id.encode("ascii")
    except UnicodeEncodeError:
        sys.exit("Error: topic_id needs to be ascii letters")

    if not all([char.islower() for char in topic_id]):
        sys.exit("Error: topic_id needs to be all lowercase letters")
    
    return topic_id, topic_name


def add_to_toc(toc_path, topic_id, topic_name):
    
    file = open(toc_path, "r")
    data = json.load(file)

    if any([t["id"] == topic_id for t in data]):
        sys.exit("Error: topic_id already exists")

    data.append(
        {
            "id": topic_id,
            "name": topic_name,
            "description": "Description",
            "sections": [
                {
                    "id": "intro",
                    "name": "Introduction"
                }
            ]
        }
    )

    with open(toc_path, "w") as file:
        json.dump(data, file, indent=2)


def create_file(path):
    
    os.mkdir(path)
    open(path + "intro.md", "x")


def set_up_reference(fetcher_path, topic_id):
    
    with fileinput.FileInput(fetcher_path, inplace=True) as file:
        for line in file:
            if "// [INSERT IMPORT]" in line:
                print(f'import {topic_id}_intro__ from "../assets/content/{topic_id}/intro.md";')
                print(f"// [INSERT IMPORT: {topic_id}]")
            if "// [INSERT MAPPING]" in line:
                print(f'contentMapping.set("{topic_id}_intro", {topic_id}_intro__);')
                print(f"// [INSERT MAPPING: {topic_id}]")
            print(line, end="")


def add_topic():
    
    topic_id, topic_name = get_sys_arguments()
    
    content_path = os.getcwd() + "/src/assets/content/"
    toc_path = content_path + "topics.json"
    t_path = content_path + topic_id + "/"
    fetcher_path = os.getcwd() + "/src/util/fetchContentMarkdown.ts"

    add_to_toc(toc_path, topic_id, topic_name)
    create_file(t_path)
    set_up_reference(fetcher_path, topic_id)


if __name__ == "__main__":
    add_topic()
