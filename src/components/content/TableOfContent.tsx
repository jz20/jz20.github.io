import "./TableOfContent.css";
import { forwardRef } from "react";
import TopicsQuery from "../../util/TopicsQuery";
import SectionSelector from "./SectionSelector";

interface TableOfContentProps {
  topicId: string,
  onCloseClick: () => void
}

const TableOfContent = forwardRef(
  function TableOfContent(props: TableOfContentProps, ref: React.   ForwardedRef<HTMLDivElement>) {

    const topicsQuery = TopicsQuery();
    const topicName = topicsQuery.getTopicName(props.topicId);
    const sections = topicsQuery.getSections(props.topicId);

    return (
      <>
        <div ref={ref} className="table-of-content">
          <button className="toc-button" onClick={() => props.onCloseClick()}>Close</button>
          <div className="section-list">
            <div className="toc-title">
              {topicName}
            </div>
            {sections?.map(section => (
              <SectionSelector
                topicId={props.topicId}
                sectionId={section.id}
                sectionName={section.name}
                onClick={props.onCloseClick}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
);

export default TableOfContent;
