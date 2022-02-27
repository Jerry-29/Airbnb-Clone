import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/navbar/navbar'
import Banner from './components/Banner';
import Details from './components/Details';

import Calender from './components/Calender';
import Payment from './components/paymentPage/Payment';
import {Route, Routes} from "react-router-dom";
import Detail from "./components/Detail";
// import Footer from './components/Footer';



function App() {
  return (
    <div>
      {/* <Navbar/>
     <Banner />
     <Details /> */}
     <Routes>
     <Route path="/payment" element={<Payment />}></Route>
     <Route path="/Detail" element={<Detail />}></Route>


     </Routes>

       {/* <Footer/>  */}
      
    </div>

  );
}

export default App;
