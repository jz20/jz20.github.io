import cpp_intro__ from "../assets/content/cpp/intro.md";
// [INSERT IMPORT: CPP]

const contentMapping = new Map();
contentMapping.set("cpp_intro", cpp_intro__);
// [INSERT MAPPING: CPP]

async function fetchContentMarkdown(id: string) {
  const response = await fetch(contentMapping.get(id));
  return await response.text();
}

export default fetchContentMarkdown;