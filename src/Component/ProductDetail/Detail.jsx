import { Navbar } from "./navbar/navbar";
import Banner from "./Banner";
import {Details} from "./Details";
import "./Banner.css";
import Calender from "./Calender";
import Footer from "./Footer";
import { Head } from "../Head";

export function Detail() {
  return (
    <div>
      <Head/> 
      <Banner />
      <Details />
      <Footer />
    </div>
  );
}
