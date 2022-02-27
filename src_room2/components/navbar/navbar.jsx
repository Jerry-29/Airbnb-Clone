import "./navbar.css";
import PublicIcon from '@mui/icons-material/Public';
import SearchIcon from '@mui/icons-material/Search';

export const Navbar = () => {
  return (
    <div className="Navbar_details">
      <div className="left-logo"><img src="http://res.cloudinary.com/simpleview/image/upload/v1513017635/clients/oakland-redesign/Airbnb_new_logo_2014_f14a788c-7634-440c-87a0-e2539782a9b8.png"/></div>
      <div className="middle_search">
        <div className="search"><SearchIcon/>
          <input type="text" placeholder="Start your search" />
          <img className="pic"
            src="https://www.citypng.com/public/uploads/small/11640084036d9a2rlqazddhqc8qenpriio0mcpbadg3do2ekbc5zh6e9ebarhkcdsp2k6gmqntaajn0wlx2vtd8zuwfnflcwsfl161gd5uj9ogu.png"
            alt=""
          />
        </div>
      </div>
      <div className="right_icon"><h5>Become a Host  <PublicIcon/> </h5></div>
    </div>
  );
};








