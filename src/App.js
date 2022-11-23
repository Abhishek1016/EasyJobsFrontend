import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
 import "./App.css";
 import logo from './logo1.png'
 import Protected from "./Protected";
 import ProtectedUser from "./ProtectedUser";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";

import BoardAdmin from "./components/BoardAdmin";

import EventBus from "./common/EventBus";
import AddJob from "./jobs/AddJob";
import ViewJob from "./jobs/ViewJob";
import EditJob from "./jobs/EditJob";
import Appliedlist from "./jobs/Appliedlist";

import About from "./About";
import Help from "./Help";
import Privacy from "./Privacy";
import Terms from "./Terms";

const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div className="mainpage">
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <Link to={"/"} className="navbar-brand">
          <img  src={logo} alt="" />
         EasyJobs!
        </Link>
        <div className="navbar-nav mr-auto">

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                Jobs
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            {(currentUser.username!=="sai")&&
            <li className="nav-item">
              <Link  className="nav-link" to={`/appliedlist/${currentUser.id}`}>Applied Jobs</Link> 
            </li>}
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Protected Component = {Register}/>} />
    
          <Route path="/user" element={<ProtectedUser Component={BoardUser}/>} />
          <Route path="/addjob" element={<ProtectedUser Component={AddJob}/>}/>
          <Route path="/admin" element={<ProtectedUser Component={BoardAdmin}/>} />
          <Route exact path="/viewjob/:id" element={<ProtectedUser Component={ViewJob}/>}/>
          <Route exact path="/editjob/:id" element={<ProtectedUser Component={EditJob}/>}/>
          <Route path="/appliedlist/:id" element={<ProtectedUser Component={Appliedlist}/>}/>
          <Route path="/About" element={<About/>} />
          <Route path="/Terms" element={<Terms/>} />
          <Route path="/Privacy" element={<Privacy/>} />
          <Route path="/Help" element={<Help/>} />
        
          <Route path='/login' element={<Protected Component = {Login}/>}></Route>
        </Routes>
      </div>

    </div>
  );
};

export default App;
