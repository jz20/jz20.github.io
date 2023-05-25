import { Button } from "@mantine/core";
import "./TableOfContent.css";
import { forwardRef } from "react";

interface TableOfContentProps {
  onCloseClick: () => void
}

const TableOfContent = forwardRef(
  function TableOfContent(props: TableOfContentProps, ref: React.   ForwardedRef<HTMLDivElement>) {

    return (
      <div ref={ref} className="table-of-content">
        <Button onClick={() => props.onCloseClick()}>Close</Button>
      </div>
    );
  }
);

export default TableOfContent;