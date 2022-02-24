import Banner from "../banner/Banner";
import Banner2 from "../banner/Banner2";

import { Footer } from "../footer/Footer";
import { Live } from "../live/Live";
import { DiscoverLive } from "../discover/DiscoverLive";
import "./Homepage.css"

export const HomePage = () => {
  return (
    <div className="App">
      <Banner ></Banner>
      <Live className="live"/>
      <DiscoverLive className="discoverLive"/>
      <Banner2/>
      <Footer className="footerH"/>
    </div>
  );
};
