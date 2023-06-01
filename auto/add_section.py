import sys
import os
import json
import fileinput

def get_sys_arguments():
    
    if len(sys.argv) != 4:
        sys.exit("Error: add_topic requires 3 arguments - topic_id, section_id, section_name")
    
    topic_id = sys.argv[1]
    section_id = sys.argv[2]
    section_name = sys.argv[3]

    try:
        section_id.encode("ascii")
    except UnicodeEncodeError:
        sys.exit("Error: topic_id needs to be ascii letters")

    if not all([char.islower() for char in section_id]):
        sys.exit("Error: topic_id needs to be all lowercase letters")
    
    return topic_id, section_id, section_name


def add_to_toc(toc_path, topic_id, section_id, section_name):
    
    file = open(toc_path, "r")
    data = json.load(file)

    if not any([t["id"] == topic_id for t in data]):
        sys.exit("Error: topic_id doesn't exist")

    def append_section_to(topic):
        if any([s["id"] == section_id for s in topic]):
            sys.exit("Error: section_id already exists in this topic")
        topic.append(
            {
                "id": section_id,
                "name": section_name
            }
        )
        return topic

    data = [t if t["id"] != topic_id else append_section_to(t) for t in data]

    with open(toc_path, "w") as file:
        json.dump(data, file, indent=2)


def create_file(path):
    
    open(path, "x")


def set_up_reference(fetcher_path, topic_id, section_id):
    
    with fileinput.FileInput(fetcher_path, inplace=True) as file:
        for line in file:
            if f"// [INSERT IMPORT: {topic_id}]" in line:
                print(f'import {topic_id}_{section_id}__ from "../assets/content/{topic_id}/{section_id}.md";')
            if f"// [INSERT MAPPING: {topic_id}]" in line:
                print(f'contentMapping.set("{topic_id}_{section_id}", {topic_id}_{section_id}__);')
            print(line, end="")


def add_section():
    
    topic_id, section_id, section_name = get_sys_arguments()
    
    content_path = f"{os.getcwd()}/src/assets/content/"
    toc_path = content_path + "topics.json"
    s_path = f"{content_path}{topic_id}/{section_id}.md"
    fetcher_path = os.getcwd() + "/src/util/fetchContentMarkdown.ts"

    add_to_toc(toc_path, topic_id, section_id, section_name)
    create_file(s_path)
    set_up_reference(fetcher_path, topic_id, section_id)


if __name__ == "__main__":
    add_section()
