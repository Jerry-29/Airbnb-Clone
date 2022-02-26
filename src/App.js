import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HotelbyId } from "./Component/HotelById";
import { store } from "./Redux/store";
import { HomePage } from "./Component/MainFolder/HomePage";
import "./styles.css";
import { Product} from "./Component/Product";
import {Details} from './Component/ProductDetail/Details'

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
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
