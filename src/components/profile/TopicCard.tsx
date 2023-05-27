import './TopicCard.css';
import { Link } from 'react-router-dom';
import { Card, Divider } from '@mantine/core';

interface TopicCardProps {
  title: string;
  content: string;
  link: string;
}

function TopicCard(props: TopicCardProps) {
  return (
    <Link to={props.link}>
      <Card className="topic" shadow="md">
        <div className="card-topic-title">{props.title}</div>
        <Divider my="sm" />
        {props.content}
      </Card>
    </Link>
  );
}

export default TopicCard;
