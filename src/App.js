import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componant/Footer';
import Header from './componant/Header';
import Home from './componant/Home';


import Alluser from './componant/Alluser';
import Login from './componant/Login';
import ProtectedRoute from './componant/ProtectedRoute';
import { useEffect } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  maxWidth: '98%',
  margin: '0 auto',
  padding: '0 15px'
};

const contentStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
};

function App() {
  return (
    <div style={containerStyle}>
      <BrowserRouter>
        <Header />
        <div style={contentStyle}>
          <Routes>
            <Route path="/home" element={<Home />} />
           
            <Route path="/login" element={<Login />} />
            <Route
              path="/sevekari"
              element={
                <ProtectedRoute>
                  <Alluser />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;



// import './App.css';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Footer from './componant/Footer';
// import Header from './componant/Header';
// import Home from './componant/Home';
// import AboutUs from './componant/AboutUs';
// import Hook from './componant/hook';
// import Signup from './componant/Signup';
// import Alluser from './componant/Alluser';




// const containerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   minHeight: '100vh',
//   maxWidth: '98%',
//   margin: '0 auto',
//   padding: '0 15px'
// };

// const contentStyle = {
//   flex: 1,
//   display: 'flex',
//   flexDirection: 'column'
// };

// function App() {
//   return (
//     // 
//     <div style={containerStyle} >
//       <BrowserRouter>
//       <Header></Header>
//       {/*  */}
//       <div style={contentStyle}>
//       <Routes>
//      <Route path='/home' element={<Home/>} />
//      <Route path='/aboutus' element={<AboutUs/>} />
//      <Route path='/hook' element={<Hook/>} />
//      <Route path='/signup' element={<Signup/>} />
//      <Route path='/sevekari' element={<Alluser/>} />
//       </Routes>
//       </div>
//       <Footer></Footer>
//       </BrowserRouter>
        
      
//     </div>
//   );
// }

// export default App;