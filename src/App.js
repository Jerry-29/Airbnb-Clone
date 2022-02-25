import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HotelbyId } from "./Component/HotelById";
import { Products } from "./Component/Products";
import { store } from "./Redux/store";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/:id" element={<HotelbyId/>} />
        </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
