import logo from './logo.svg';
import './App.css';
//import Testcomponent from './components/functionalcomponent/testcomponent';
//import TestclassComponent from './components/ClassComponent/testclassComponent';
//import Login from './components/ClassComponent/LoginComponent';
//import PropsComponent from './components/functionalcomponent/PropsComponent';
//import StateComponent from './components/ClassComponent/StateComponent';*/
import NavBar from './components/functionalcomponent/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/functionalcomponent/About';
import Experience from './components/functionalcomponent/Experience';
import loginac from './components/functionalcomponent/loginac';
import Home from './components/functionalcomponent/Home';
import Footer from './components/functionalcomponent/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/About" element={<About/>}></Route>
         <Route path="/Experience" element={<Experience/>}></Route>
         <Route path="/loginac" element={<loginac/>}></Route>
      </Routes>
      </BrowserRouter>

      
      {/* <PropsComponent name="Dhivya" course="Mern"/> */}
     
     
      {/* <StateComponent/> */}
    <BrowserRouter>
    <Footer/>
    </BrowserRouter>  
    </div>
    
  );
}

export default App;
