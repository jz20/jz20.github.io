import './Wrapper.css';
import { ThemeProvider } from '@mui/material';
import { mainTheme } from '../style/theme';

interface WrapperProps {
  children: JSX.Element;
}

function Wrapper(props: WrapperProps) {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className='wrapper-outer'>
        <div className='wrapper-inner'>
          {props.children}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Wrapper;