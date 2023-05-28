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
        <button className="bar-button" onClick={() => props.onTableOfContentClick()}>Table of Content</button>
        <Link to="/">
          <button className="bar-button">Main Page</button>
        </Link>
      </div>
      <div className="topic-title">{props.title}</div>
      <hr className="solid-divider" />
    </div>
  );
}

export default TopBar;
