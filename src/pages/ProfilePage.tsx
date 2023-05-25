import './ProfilePage.css';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import TopicCard from '../components/profile/TopicCard';

import bioPath from '../assets/content/bio.md';
import topics from '../assets/content/topics.json';

function ProfilePage() {

  const title: string = "Welcome to Jian's Personal Site";

  const [bio, setBio] = useState("");

  useEffect(() => {
    fetch(bioPath)
      .then(response => response.text())
      .then(text => setBio(text));
  });

  return (
    <>
      <div className="title1">{title}</div>
      <div className='box1'><ReactMarkdown>{bio}</ReactMarkdown></div>
      <br />
      <div className="card-box">
        {topics.map(topic => <TopicCard title={topic.name} content={topic.description} link={"/" + topic.id}/>)}
      </div>
    </>
  );
}

export default ProfilePage;