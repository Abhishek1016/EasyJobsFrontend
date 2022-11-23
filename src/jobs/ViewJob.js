import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function ViewJob() {
  const currentUser=AuthService.getCurrentUser();
  const [job, setJob] = useState({
    companyName: "",
    jobRole: "",
    experience: "",
    salary:"",
    location:"",
    skillRequired:"",
    image:"",
  });

  const { id } = useParams();


  useEffect(()=>{
    loadJob();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const loadJob=async()=>{
    const result=await axios.get(`http://localhost:8080/api/job/${id}`)
    setJob(result.data)
  }
  const addtoappliedlist=async()=>{
    let appliedjob={
      userId:currentUser.id,
      jobId:job.id,
      companyName:job.companyName,
      jobRole:job.jobRole,
      experience:job.experience,
      salary:job.salary,
      location:job.location,
      skillRequired:job.skillRequired,
      image:job.image,
    }
    
    console.log(appliedjob);
    const res=await axios.post("http://localhost:8080/api/applied/addjob",appliedjob);
    console.log(res);
  }
  function pop(){
    alert("You have applied to this Job Successfully");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Job Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Job id : {job.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Company Name:</b>
                  {job.companyName}
                </li>
                <li className="list-group-item">
                  <b>Job Role:</b>
                  {job.jobRole}
                </li>
                <li className="list-group-item">
                  <b>Experience:</b>
                  {job.experience}
                </li>
                <li className="list-group-item">
                  <b>Salary:</b>
                  {job.salary}
                </li>
                <li className="list-group-item">
                  <b>Location:</b>
                  {job.location}
                </li>
                <li className="list-group-item">
                  <b>Skills Required:</b>
                  {job.skillRequired}
                </li>
                <div>
                  <img src={job.image}/>
                </div>
              </ul>
            </div>
          </div>
          {(currentUser.username!=="sai") &&
          <div className="col-md-4">
                         <button className="btn btn-success mt-2" onClick={()=>{addtoappliedlist();pop()}}>Apply</button>
                         </div>  }
          <Link className="btn btn-primary my-2" to={"/user"}>
            Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
}