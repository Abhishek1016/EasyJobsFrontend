import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddJob() {
  let navigate = useNavigate();

  const [job, setJob] = useState({
    companyName: "",
    jobRole: "",
    experience: "",
    salary: "",
    location: "",
    skillRequired: "",
    image: "",
  });

  const {
    companyName,
    jobRole,
    experience,
    salary,
    location,
    skillRequired,
    image,
  } = job;

  const onInputChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/job", job);
    navigate("/user");
  };
  function PreviewImage(e) {
    e.preventDefault();
    let oFReader = new FileReader();
    oFReader.readAsDataURL(e.target.files[0]);
    oFReader.onload = function (oFREvent) {
      job.image = oFREvent.target.result;
    };
  }
  function pop(){
    alert("Job Added");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Post Job</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Firstname" className="form-label">
                Company Name
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
                placeholder="Enter Experience"
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
                placeholder="Enter Salary Offered"
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
                placeholder="Job Location"
                name="location"
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
                placeholder="List out skills required"
                name="skillRequired"
                value={skillRequired}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="uploadImage" >
                Upload Company logo
              </label>

              <input
                type="file"
                onChange={(e) => PreviewImage(e)}
                name="uploadImage"
                id="uploadImage"
                accept="image/*"
                className="hidden"
               
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
