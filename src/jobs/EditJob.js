import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditJob() {
  let navigate = useNavigate();

  const {id}=useParams();

  const [job, setJob] = useState({
    companyName: "",
    jobRole: "",
    experience: "",
    salary:"",
    location:"",
    skillRequired:"",
  });

  const { companyName, jobRole, experience,salary,location,skillRequired } = job;

  const onInputChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    loadJob();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/job/${id}`, job);
    navigate("/user");
  };

  const loadJob=async()=>{
    const result=await axios.get(`http://localhost:8080/api/job/${id}`)
    setJob(result.data)
  }
  function pop(){
    alert("Job Edited Successfully");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Job</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Firstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Company name"
                name="companyName"
                value={companyName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Lastname" className="form-label">
                JobRole
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter JobRole"
                name="jobRole"
                value={jobRole}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
               Experience
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="address"
                name="experience"
                value={experience}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
               Salary
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="address"
                name="salary"
                value={salary}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
               Location
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="address"
                name="lacation"
                value={location}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
               SkillsRequired
              </label>
              <textarea
                type="text"
                className="form-control"
                placeholder="address"
                name="skillRequired"
                value={skillRequired}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button onClick={pop} type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}