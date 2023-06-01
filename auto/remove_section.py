import sys
import os
import json
import fileinput

def get_sys_arguments():
    
    if len(sys.argv) != 4:
        sys.exit("Error: add_topic requires 2 arguments - topic_id, section_id")
    
    topic_id = sys.argv[1]
    section_id = sys.argv[2]
    
    return topic_id, section_id


def remove_from_toc(toc_path, topic_id, section_id):
    
    file = open(toc_path, "r")
    data = json.load(file)

    if not any([t["id"] == topic_id for t in data]):
        sys.exit("Error: topic_id doesn't exist")

    def remove_section_from(topic):
        if not any([s["id"] == section_id for s in topic]):
            sys.exit("Error: section_id doesn't exist in this topic")
        topic["sections"] = [s for s in topic["sections"] if s["id"] != section_id]
        return topic

    data = [t if t["id"] != topic_id else remove_section_from(t) for t in data]

    with open(toc_path, "w") as file:
        json.dump(data, file, indent=2)


def remove_file(path):
    
    os.remove(path)


def remove_reference(fetcher_path, topic_id, section_id):
    
    with fileinput.FileInput(fetcher_path, inplace=True) as file:
        for line in file:
            if not any([s in line for s in [
                f"import {topic_id}_{section_id}",
                f'contentMapping.set("{topic_id}_{section_id}'
            ]]):
                print(line, end="")


def remove_section():
    
    topic_id, section_id, section_name = get_sys_arguments()
    
    content_path = f"{os.getcwd()}/src/assets/content/"
    toc_path = content_path + "topics.json"
    s_path = f"{content_path}{topic_id}/{section_id}.md"
    fetcher_path = os.getcwd() + "/src/util/fetchContentMarkdown.ts"

    remove_from_toc(toc_path, topic_id, section_id)
    remove_file(s_path)
    remove_reference(fetcher_path, topic_id, section_id)


if __name__ == "__main__":
    remove_section()
