
import './App.css';
import Footer from './componant/Footer';
import Header from './componant/Header';
import Home from './componant/Home';

function App() {
  return (
    <div className="container">
         <Header></Header>
         <Home></Home>
         <Footer></Footer>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header> */}
    </div>
  );
}

export default App;
