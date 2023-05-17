import TopicCard from '../components/app/TopicCard';
import '../style/global.css';

function TmpPage() {
  const title: string = "This is a placeholder";

  return (
    <>
      <h1 className="title1">{title}</h1>
      <div className="card-box">
        <TopicCard title="Main Page" content="content" link="/"/>
        <TopicCard title="Tmp Page" content="content" link="/tmp"/>
      </div>
    </>
  );
}

export default TmpPage;