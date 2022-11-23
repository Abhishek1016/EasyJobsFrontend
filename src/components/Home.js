import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


import "./Home.css";

const Home = () => {
  const [currentUser, setCurrentUser] = useState();

  const navigate = useNavigate();

  const checkuser = () => {
    const user = AuthService.getCurrentUser();

    if (user) {
      navigate("/user");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="main-container">
      <div className="section1">
        <div>
          <img src="./EasyJobs.png" alt="no logo" />
        </div>
        <div className="text1">
          <h1>Find Your Dream Job Now</h1>
        </div>
      </div>
      <div className="section2">
        <div className="row1">
          <div className="boxess">
            <img src="./smallsymbols/hr.svg" alt="no logo" />
            <h1>HR</h1>
          </div>
          <div className="boxess">
            <img src="./smallsymbols/analysis.svg" alt="no logo" />
            <h1>Analysis</h1>
          </div>
          <div className="boxess">
            <img src="./smallsymbols/banking.svg" alt="no logo" />
            <h1>Banking</h1>
          </div>
          <div className="boxess">
            <img src="./smallsymbols/cybersecurity.svg" alt="no logo" />
            <h1>Cyber Security</h1>
          </div>
        </div>
        <div className="row2">
          <div className="boxess">
            <img src="./smallsymbols/Engineering.svg" alt="no logo" />
            <h1>Engineering</h1>
          </div>
          <div className="boxess">
            <img src="./smallsymbols/Marketing.svg" alt="no logo" />
            <h1>Marketing</h1>
          </div>
          <div className="boxess">
            <img src="./smallsymbols/Photography.svg" alt="no logo" />
            <h1>Photography</h1>
          </div>
          <div className="boxess">
            <img src="./smallsymbols/project-management.svg" alt="no logo" />
            <h1>Project Management</h1>
          </div>
        </div>
        <div className="row3">
          <div className="boxess">
            <img src="./smallsymbols/softwareengineering.svg" alt="no logo" />
            <h1>SoftWare</h1>
          </div>
          <div className="boxess">
            <img src="./smallsymbols/Startup.svg" alt="no logo" />
            <h1>Start Up</h1>
          </div>
          <div className="boxess">
            <img src="./smallsymbols/supplychain.svg" alt="no logo" />
            <h1>SupplyChain</h1>
          </div>
        </div>
      </div>
      <div className="section3">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={checkuser}
        >
          Get Started<span>{">"}</span>{" "}
        </button>
      </div>
      <div className="section4">
        <div className="leftside">
          <img src="./EasyJobs.png" />
        </div>
        <div className="middleside">
          <div>
            <ul>
              <li><Link style={{color: 'white',textDecoration:'none'}} to={"/About"}>About Us</Link></li>
              
           
             
            </ul>
          </div>
          <div>
            <ul>
              <li><Link style={{color: 'white',textDecoration:'none'}} to={"/Help"}>Help Center</Link></li>
           
            </ul>
          </div>
          <div>
            <ul>
              <li><Link style={{color: 'white' ,textDecoration:'none'}} to={"/Privacy"}>Privacy Policy</Link></li>
             
              
             
            </ul>
          </div>
          <div>
            <ul>
            <li><Link style={{color: 'white',textDecoration:'none'}} to={"/Terms"}>Terms and Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="rightside">
          <h3>Reach Us On</h3>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-linkedin"></a>
          <a href="#" class="fa fa-instagram"></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
