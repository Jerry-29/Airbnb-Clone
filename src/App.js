import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HotelbyId } from "./Component/HotelById";
import { store } from "./Redux/store";
import { HomePage } from "./Component/MainFolder/HomePage";
import "./styles.css";
import { Product} from "./Component/Product";
import {Details} from './Component/ProductDetail/Details'
import {Login } from '../src/login/Login'
import { useDispatch,useSelector } from "react-redux";
import { Navigate } from "react-router";
import { logout } from "./Redux/action";

export default function App() {

  // const {status}=useSelector(store=>store.LoginReducer)
  // // console.log("stattsstustusts",status)
  //   const dispatch=useDispatch()
// // 
//   if(status){
//     <Navigate to="/home" element={<HomePage/>}></Navigate>
//     // dispatch(logout())
//   }

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Product />} />
            <Route path="/:id" element={<HotelbyId />} />
            <Route path="/products/:id" element={<Details/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
