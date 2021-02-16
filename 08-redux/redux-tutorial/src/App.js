import logo from './logo.svg';
import './App.css';
import DisplayAmount from './components/DisplayAmount';
import Deposit from './components/Deposit';

function App() {
  return (
    <div className="App">
      <DisplayAmount />
	  
	  <Deposit />
    </div>
  );
}

export default App;
