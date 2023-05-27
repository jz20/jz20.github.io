import "./ContentPage.css";
import TableOfContent from "../components/content/TableOfContent";
import { useRef, useState } from "react";
import TopBar from "../components/content/TopBar";
import ContentLoader from "../components/content/ContentLoader";
import TopicsQuery from "../util/TopicsQuery";

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

  function onTableOfContentSelection(sectionId: string) {
    setSectionId(sectionId);
    hideTableOfContent();
  }

  const [sectionId, setSectionId] = useState("intro");

  const title = TopicsQuery().getTitle(props.topicId, sectionId);

  return (
    <>
      <TopBar title={title} onTableOfContentClick={showTableOfContent} />
      <TableOfContent
        topicId={props.topicId}
        onSelectionClick={onTableOfContentSelection}
        onCloseClick={hideTableOfContent}
        ref={tableRef}
      />
      <div className='box1'>
        <ContentLoader topicId={props.topicId} sectionId={sectionId} />
      </div>
    </>
  );
}

export default ContentPage;
