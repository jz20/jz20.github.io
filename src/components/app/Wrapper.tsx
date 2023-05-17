import './Wrapper.css';

interface WrapperProps {
  children: JSX.Element;
}

function Wrapper(props: WrapperProps) {
  return (
      <div className='wrapper-outer'>
        <div className='wrapper-inner'>
          {props.children}
        </div>
      </div>
  );
}

export default Wrapper;