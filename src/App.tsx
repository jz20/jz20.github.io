import { useState } from 'react';
import './App.css';
import { Button } from '@mui/material';
import Wrapper from './components/Wrapper';
import ProfilePage from './pages/ProfilePage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <>
        <ProfilePage />
        <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </>
    </Wrapper>
  );
}

export default App;
