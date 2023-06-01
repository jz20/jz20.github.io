import "./ContentPage.css";
import TableOfContent from "../components/content/TableOfContent";
import { useRef } from "react";
import TopBar from "../components/content/TopBar";
import ContentLoader from "../components/content/ContentLoader";
import TopicsQuery from "../util/TopicsQuery";

import { defaultSectionId } from '../App';

interface ContentPageProps {
  topicId: string
  sectionId?: string
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

  const sectionId = props.sectionId ? props.sectionId : defaultSectionId;

  const title = TopicsQuery().getTitle(props.topicId, sectionId);

  return (
    <>
      <TopBar title={title} onTableOfContentClick={showTableOfContent} />
      <TableOfContent
        topicId={props.topicId}
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
