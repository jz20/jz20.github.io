import "./ContentPage.css";
import TableOfContent from "../components/content/TableOfContent";
import { useRef, useState } from "react";
import TopBar from "../components/content/TopBar";
import ContentLoader from "../components/content/ContentLoader";

import topics from '../assets/content/topics.json';

interface ContentPageProps {
  topicId: string
}

function ContentPage(props: ContentPageProps) {

  const tableRef = useRef<HTMLDivElement>(null);

  function showTableOfContent() {
    if (tableRef.current != null) {
      tableRef.current.style.visibility = "visible";
    }
  }

  function hideTableOfContent() {
    if (tableRef.current != null) {
      tableRef.current.style.visibility = "hidden";
    }
  }

  const [sectionId, _setSectionId] = useState("intro");

  const currentTopic = topics.filter(topic => topic.id == props.topicId).at(0);
  const topicName = currentTopic?.name;
  const sections = currentTopic?.sections;
  const sectionName = sections?.filter(section => section.id == sectionId).at(0)?.name;

  const contentId = `${props.topicId}_${sectionId}`;

  return (
    <>
      <TopBar title={`${topicName}: ${sectionName}`} onTableOfContentClick={showTableOfContent} />
      <TableOfContent onCloseClick={hideTableOfContent} ref={tableRef} />
      <div className='box1'><ContentLoader id={contentId} /></div>
    </>
  );
}

export default ContentPage;