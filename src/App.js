
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './componant/Footer';
import Header from './componant/Header';
import Home from './componant/Home';
import AboutUs from './componant/AboutUs';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Header></Header>
      <Routes>
     <Route path='/home' element={<Home/>} />
     <Route path='/aboutus' element={<AboutUs/>} />
     
     



   

      </Routes>
      <Footer></Footer>
      </BrowserRouter>
        
      
    </div>
  );
}

export default App;
