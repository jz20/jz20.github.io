import './TopicCard.css';
import { Link } from 'react-router-dom';

interface TopicCardProps {
  title: string;
  content: string;
  link: string;
}

function TopicCard(props: TopicCardProps) {
  return (
    <Link to={props.link}>
      <div className="topic">
        <div className="card-topic-title">{props.title}</div>
        <hr className="card-divider" />
        {props.content}
      </div>
    </Link>
  );
}

export default TopicCard;
