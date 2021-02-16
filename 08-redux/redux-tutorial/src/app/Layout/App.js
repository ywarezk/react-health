import './App.css';
import {DisplayAmount, Deposit} from '../../bank';
import TodoList from '../../todo/TodoList';

function App() {
  return (
    <div className="App">
      <DisplayAmount />
	  
	  <Deposit />
	  
	  <TodoList />
    </div>
  );
}

export default App;
