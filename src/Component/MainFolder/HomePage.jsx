import Banner from "../banner/Banner";
import { Live } from "../live/Live";
import { DiscoverLive } from "../discover/DiscoverLive";
import Banner2 from "../banner/Banner2";
import { Footer } from "../footer/Footer";
// import {Login} from "../login/Login"

import "./Homepage.css";
import { Head } from "../Head";

export const HomePage = () => {
  return (
    <div className="App">
      <Head />
      <Banner />
      <Live />
      <DiscoverLive />
      <Banner2 />
      <Footer />
      {/* <Login/> */}
    </div>
  );
};
