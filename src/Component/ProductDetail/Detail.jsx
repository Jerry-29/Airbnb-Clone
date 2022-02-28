import { Navbar } from "./navbar/navbar";
import Banner from "./Banner";
import {Details} from "./Details";
import "./Banner.css";
import Calender from "./Calender";
import Footer from "./Footer";

export function Detail() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Details />
      <Footer />
    </div>
  );
}
