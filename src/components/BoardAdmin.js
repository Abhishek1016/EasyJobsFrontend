import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { Link } from "react-router-dom";
import axios from "axios";


const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);
  const [jobs,setJobs]=useState([]);

  // const {id}=useParams();

  useEffect(()=>{
      loadJobs();

  },[]);

  const loadJobs=async ()=>{
      const result=await axios.get("http://localhost:8080/api/job");
      setJobs(result.data);
  }

  const deleteJob=async(id)=>{
    await axios.delete(`http://localhost:8080/api/job/${id}`);
    loadJobs();
  }


  return (
    <div>
     
      <div className="jobboard">
      <div className="container">
        <header className="jumbotron">
         <h1>Please Add Jobs here</h1>
        </header>
        <div>
          {jobs.map((jobs) => {
            return (
              <div className="profile-area mt-3">
                <div className="container-fluid">
                  <div className="card mb-3 text-bg-light bg-info">
                    <div className="row">
                      {/* <div className="col-md-8"> */}
                      <div className=" col-md-4">
                        <img src={jobs.image} alt="no img" />
                      </div>
                      <div className=" col-md-4 mt-2">
                        <ul>
                          <li>Job Title : {jobs.companyName}</li>
                          <li>JobRole : {jobs.jobRole}</li>
                          <li>Experience : {jobs.experience}</li>
                          <li>Salary : {jobs.salary}</li>
                          <li>Location : {jobs.location}</li>
                          <li>Skills : {jobs.skillRequired}</li>
                        </ul>
                      </div>
                      <div className=" col-md-4">
                         <div className="col-md-4">
                         <Link  className='btn btn-danger mt-5 px-3' to={`/editJob/${jobs.id}`}>Edit</Link>
                         </div> 
                         <div className="col-md-4">
                          <button  className='btn btn-danger mt-3' onClick={()=>deleteJob(jobs.id)}>Delete</button>
                         </div>
                      </div> 
                      
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link  className='btn btn-outline-dark' to="/addjob">Add Job</Link>
      </div>
    </div>
    </div>
  );
};

export default BoardAdmin;
