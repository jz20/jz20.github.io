import { Button, Divider } from "@mantine/core";
import "./TopBar.css";
import { Link } from "react-router-dom";

interface TopBarProps {
  onTableOfContentClick: () => void,
  title: string
}

function TopBar(props: TopBarProps) {

  return (
    <div className="top-bar">
      <div className="justified-bar">
        <Button className="bar-button" onClick={() => props.onTableOfContentClick()}>Table of Content</Button>
        <Link to="/">
          <Button className="bar-button">Main Page</Button>
        </Link>
      </div>
      <div className="topic-title">{props.title}</div>
      <Divider my="sm" />
    </div>
  );
}

export default TopBar;