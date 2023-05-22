import './App.css';
import Wrapper from './components/app/Wrapper';
import ProfilePage from './pages/ProfilePage';
import { Route, Routes } from 'react-router-dom';
import TmpPage from './pages/TmpPage';
import ContentPage from './pages/ContentPage';

function App() {

  return (
    <Wrapper>
      <>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/tmp" element={<TmpPage />} />
          <Route path="/content" element={<ContentPage />} />
        </Routes>
      </>
    </Wrapper>
  );
}

export default App;
