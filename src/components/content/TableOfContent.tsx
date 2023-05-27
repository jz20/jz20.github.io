import { Button } from "@mantine/core";
import "./TableOfContent.css";
import { forwardRef } from "react";
import TopicsQuery from "../../util/TopicsQuery";
import SectionSelector from "./SectionSelector";

interface TableOfContentProps {
  topicId: string,
  onSelectionClick: (sectionId: string) => void
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
          <Button className="toc-button" onClick={() => props.onCloseClick()}>Close</Button>
          <div className="section-list">
            <div className="toc-title">
              {topicName}
            </div>
            {sections?.map(section => (
              <SectionSelector
                text={section.name}
                onClick={() => props.onSelectionClick(section.id)} />
            ))}
          </div>
        </div>
      </>
    );
  }
);

export default TableOfContent;
