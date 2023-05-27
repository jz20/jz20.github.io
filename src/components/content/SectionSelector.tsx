import "./SectionSelector.css";

interface SectionSelectorProps {
  text: string,
  onClick: () => void
}

function SectionSelector(props: SectionSelectorProps) {
  return (
    <div className="section-selector-outer">
      <div className="section-selector-inner" onClick={props.onClick}>
        {props.text}
      </div>
    </div>
  );
}

export default SectionSelector;