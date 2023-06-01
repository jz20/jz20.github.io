import './App.css';
import Wrapper from './components/app/Wrapper';
import ProfilePage from './pages/ProfilePage';
import { Route, Routes } from 'react-router-dom';
import ContentPage from './pages/ContentPage';

import topics from './assets/content/topics.json';

function App() {

  return (
    <Wrapper>
      <>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          {topics.map(topic =>
            <Route path={`/${topic.id}`} element={
              <ContentPage topicId={topic.id} />
            }/>
          )}
          {topics.map(topic => topic.sections.map(section => 
            <Route path={`/${topic.id}/${section.id}`} element={
              <ContentPage topicId={topic.id} sectionId={section.id} />
            }/>
          ))}
        </Routes>
      </>
    </Wrapper>
  );
}

export default App;
