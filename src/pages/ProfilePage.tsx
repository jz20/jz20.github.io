import '../style/global.css';
import './ProfilePage.css';
import ReactMarkdown from 'react-markdown';
import bioPath from '../assets/content/bio.md';
import { useEffect, useState } from 'react';
import TopicCard from '../components/app/TopicCard';

function ProfilePage() {

  const title: string = "Welcome to Jian's Personal Site";

  const [bio, setBio] = useState("");

  useEffect(() => {
    fetch(bioPath)
      .then(response => response.text())
      .then(text => setBio(text));
    console.log(bio);
  })

  return (
    <>
      <h1 className="title1">{title}</h1>
      <div className='box1'><ReactMarkdown>{bio}</ReactMarkdown></div>
      <br />
      <div className="card-box">
          <TopicCard title="Main Page" content="main page" link="/"/>
          <TopicCard title="Tmp Page" content="temporary placeholder" link="/tmp"/>
      </div>
    </>
  );
}

export default ProfilePage;