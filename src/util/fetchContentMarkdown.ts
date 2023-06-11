import cpp_intro__ from "../assets/content/cpp/intro.md";
import cpp_tmp__ from "../assets/content/cpp/tmp.md";
// [INSERT IMPORT: cpp]
import unity_intro__ from "../assets/content/unity/intro.md";
import unity_start__ from "../assets/content/unity/start.md";
// [INSERT IMPORT: unity]
// [INSERT IMPORT]

const contentMapping = new Map();
contentMapping.set("cpp_intro", cpp_intro__);
contentMapping.set("cpp_tmp", cpp_tmp__);
// [INSERT MAPPING: cpp]
contentMapping.set("unity_intro", unity_intro__);
contentMapping.set("unity_start", unity_start__);
// [INSERT MAPPING: unity]
// [INSERT MAPPING]

async function fetchContentMarkdown(id: string) {
  const response = await fetch(contentMapping.get(id));
  return await response.text();
}

export default fetchContentMarkdown;
