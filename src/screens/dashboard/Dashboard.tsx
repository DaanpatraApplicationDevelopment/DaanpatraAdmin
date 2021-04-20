import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Component } from "react";
import UserProfile from "../user-profile/user-profile";
import Donationdetails from "../donation/donation detail/Donationdetails";
import Volunteer from "../volunteer/Volunteer";
import Topslidebar from "../topslidebar/Topslidebar";
import DriverDetails from '../DriverDetails/DriverDetails'

function Dashboard() {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <h1>User Profile</h1>
          <Link to="/user-profile">
            <button className="Data-btn">UserData</button>
          </Link>
          <Route path="/user-profile" Component={UserProfile} />
        </div>
      </div>

      <div className="column">
        <div className="card">
          <h1>DonationDetails</h1>
          <Link to="/Donationdetails">
            <button className="Donate-btn">DonationDetails</button>
          </Link>
          <Route path="/Donationdetails" component={Donationdetails} />
        </div>
      </div>

      <div className="column">
        <div className="card">
          <h1>Driver Details</h1>
          <Link to="/contactus">
            <button className="contact-btn">Driver Details</button>
          </Link>
          <Route path="/driverdetails" component={DriverDetails} />
        </div>
      </div>

      <div className="column">
        <div className="card">
          <h1>Volunteer</h1>
          <Link to="/Volunteer">
            <button className="Volunteer-btn">VolunteerDetails</button>
          </Link>
          <Route path="/Volunteer" component={Volunteer} />
        </div>
      </div>

      <div className="column">
        <div className="card">
          <h1>TopSlidebar</h1>
          <Link to="/topslidebar">
            <button className="slidebar-btn">TopSlidebar</button>
          </Link>
          <Route path="/topslidebar" component={Topslidebar} />
        </div>
      </div>

      <div className="column">
        <div className="card">
          <h1>Sub Admin Details</h1>
          <Link to="/topslidebar">
            <button className="slidebar-btn">Sub Admin Details</button>
          </Link>
          <Route path="/topslidebar" component={Topslidebar} />
        </div>
      </div>

    </div>
    
  );
}

export default Dashboard;
