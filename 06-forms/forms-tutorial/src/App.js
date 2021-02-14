import logo from './logo.svg';
import './App.css';
// import Login from './01-login-controlled-form/Login';
// import Login from './02-login-uncontrolled/Login';
import ContactUs from './04-formik/ContactUs';
import Child from './05-change-detection/Child';

function App() {
  console.log('App rendering');	
	
  return (
    <div className="App">
      {/* <Login /> */}
	  
	  {/* <ContactUs /> */}
	  <h1> App component </h1>
	  <Child />
    </div>
  );
}

export default App;
