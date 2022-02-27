import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/navbar/navbar'
import Banner from './components/Banner';
import Details from './components/Details';

import Calender from './components/Calender';

import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar/>
     <Banner />
     <Details />
     
     
       <Footer/> 
      
    </>

  );
}

export default App;
