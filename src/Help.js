import React from "react";
import { useNavigate } from "react-router-dom";
import './help.css'
const Help = () => {
const navigate=useNavigate();
function back(){
  navigate("/");
}
  return (
    <div className="helpboard">
      <h1>Help Center</h1>
      <p>
        EasyJobs FastForward Services Toll Free Number: 1800-102-5557 ,
        1800-572-5557
      </p>
      <p>Work Timings: 9.30 AM to 6.30 PM Working Days: (Monday to Saturday)</p>
      <p>
        Email Id: service@EasyJobs.com International Clients: +91 120 4021100
        (9.30 AM to 6.00 PM IST)
      </p>
      <br />
      <button onClick={back}>Go Back</button>
    </div>
  );
};

export default Help;
