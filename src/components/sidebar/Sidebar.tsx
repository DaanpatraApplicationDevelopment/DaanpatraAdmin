import "./Sidebar.css";
import logo from "../../assets/images/logofinal.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={"sidebar-responsive"} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link">
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            Dashboard
          </Link>
        </div>

        <div className="sidebar__link">
          <Link to="/user-profile" style={{ textDecoration: "none" }}>
            User Profile
          </Link>
        </div>

        <div className="sidebar__link">
          <Link to="/driverdetails" style={{ textDecoration: "none" }}>
            Driver Details
          </Link>
        </div>

        <div className="sidebar__link">
          <Link to="/subadminform" style={{ textDecoration: "none" }}>
            Sub Admin Form
          </Link>
        </div>

        <div className="sidebar__link">
          <Link to="/subadmindetails" style={{ textDecoration: "none" }}>
            Sub Admin Details
          </Link>
        </div>

        <div className="sidebar__link">
          <Link to="/ngo-profile" style={{ textDecoration: "none" }}>
            Ngo Profile
          </Link>
        </div>

        <div className="sidebar__link">
          <Link to="Donationdetails" style={{ textDecoration: "none" }}>
            Donation details
          </Link>
        </div>

        <div className="sidebar__link">
          <Link to="Volunteer" style={{ textDecoration: "none" }}>
            Volunteer
          </Link>
        </div>

        <div className="sidebar__link">
          <Link to="contactus" style={{ textDecoration: "none" }}>
            Contact Us
          </Link>
        </div>

        <div className="sidebar__link">
          <Link to="/topslidebar" style={{ textDecoration: "none" }}>
            Top sliders
          </Link>
        </div>

        <div className="sidebar__link">
          <Link to="/Gallery" style={{ textDecoration: "none" }}>
            Gallery Images
          </Link>
        </div>

        <div className="sidebar__link">
          <Link to="/aboutdata" style={{ textDecoration: "none" }}>
            WE Are
          </Link>
        </div>

        <div className="sidebar__logout">
          <Link
            onClick={() => localStorage.clear()}
            style={{ textDecoration: "none" }}
          >
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
