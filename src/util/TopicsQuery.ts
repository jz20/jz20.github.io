import topics from "../assets/content/topics.json";

function TopicsQuery() {

  const getTitle = (topicId: string, sectionId: string) => {
    const topic = topics.filter(topic => topic.id == topicId).at(0);
    const section = topic?.sections?.filter(section => section.id == sectionId).at(0);
    return `${topic?.name}: ${section?.name}`;
  }

  const getTopicName = (topicId: string) => {
    const topic = topics.filter(topic => topic.id == topicId).at(0);
    return topic?.name;
  }

  const getSections = (topicId: string) => {
    const topic = topics.filter(topic => topic.id == topicId).at(0);
    return topic?.sections;
  }

  // const getSectionName = (topicId: string, sectionId: string) => {
  //   const topic = topics.filter(topic => topic.id == topicId).at(0);
  //   const section = topic?.sections?.filter(section => section.id == sectionId).at(0);
  //   return section?.name;
  // }

  return {
    getTitle,
    getTopicName,
    getSections
    // getSectionName
  }
}

export default TopicsQuery;