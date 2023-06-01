import { Link } from "react-router-dom";
import "./SectionSelector.css";

interface SectionSelectorProps {
  topicId: string,
  sectionId: string,
  sectionName: string,
  onClick: () => void
}

function SectionSelector(props: SectionSelectorProps) {
  return (
    <div className="section-selector-outer">
      <Link to={`/${props.topicId}/${props.sectionId}`}>
        <div className="section-selector-inner" onClick={props.onClick}>
          {props.sectionName}
        </div>
      </Link>
    </div>
  );
}

export default SectionSelector;
