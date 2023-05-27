import sys
import os
import json
import fileinput
import shutil

def get_sys_arguments():
    
    if len(sys.argv) != 2:
        sys.exit("Error: remove_topic requires 1 arguments - topic_id")
    
    topic_id = sys.argv[1]

    return topic_id


def remove_from_toc(toc_path, topic_id):
    
    file = open(toc_path, "r")
    data = json.load(file)

    if not any([t["id"] == topic_id for t in data]):
        sys.exit("Error: topic_id already exists")

    data = [t for t in data if t["id"] != topic_id]

    with open(toc_path, "w") as file:
      json.dump(data, file, indent=2)


def remove_file(path):
    
    shutil.rmtree(path)


def remove_reference(fetcher_path, topic_id):
    
    with fileinput.FileInput(fetcher_path, inplace=True) as file:
        for line in file:
            if not any([s in line for s in [
                f"// [INSERT MAPPING: {topic_id}]",
                f"// [INSERT IMPORT: {topic_id}]",
                f"import {topic_id}_",
                f'contentMapping.set("{topic_id}_'
            ]]):
                print(line, end="")


def remove_topic():
    
    topic_id = get_sys_arguments()
    
    content_path = os.getcwd() + "/src/assets/content/"
    toc_path = content_path + "topics.json"
    t_path = content_path + topic_id + "/"
    fetcher_path = os.getcwd() + "/src/util/fetchContentMarkdown.ts"

    remove_from_toc(toc_path, topic_id)
    remove_file(t_path)
    remove_reference(fetcher_path, topic_id)

if __name__ == "__main__":
    remove_topic()