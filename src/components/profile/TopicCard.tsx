import './TopicCard.css';
import { Link } from 'react-router-dom';

interface TopicCardProps {
  title: string;
  content: string;
  link: string;
}

function TopicCard(props: TopicCardProps) {
  return (
    <button className="topic-outer">
      <Link to={props.link}>
        <div className="topic-inner">
          <div className="card-topic-title">{props.title}</div>
          <hr className="card-divider" />
          <div className="card-topic-content">{props.content}</div>
        </div>
      </Link>
    </button>
  );
}

export default TopicCard;
