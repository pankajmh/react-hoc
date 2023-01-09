import ReactDOM from 'react-dom';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

const App = () => {
  return (
    <div>
      <h1>I am App component!!!</h1>
      <ClickCounter name='Pankaj' />
      <HoverCounter />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
