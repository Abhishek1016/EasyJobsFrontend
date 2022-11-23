import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import axios from "axios";

export default function Appliedlist() {
  const [item, setItem] = useState([]);
  const user = AuthService.getCurrentUser();

  useEffect(() => {
    loadAppliedlist();

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadAppliedlist = async () => {
    const appliedListItem = await axios.get(
      `http://localhost:8080/api/applied/${user.id}`
    );

    setItem(appliedListItem.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:8080/api/applied/${id}`);

    loadAppliedlist();
  };

  return (
    <div className="jobboard">
    <div className="container">
      <header className="jumbotron">
        <h3> {user.username}, You have applied to the following Jobs</h3>
      </header>
      <div>
        {item.map((item) => {
          return (
            <div className="profile-area mt-3">
              <div className="container-fluid">
                <div className="card mb-3 text-bg-light bg-info">
                  <div className="row">
                    {/* <div className="col-md-8"> */}
                    <div className=" col-md-4">
                      <img  src={item.image} alt="no img" />
                    </div>
                    <div className=" col-md-4 mt-2">
                      <ul>
                        <li>Company Name : {item.companyName}</li>
                        <li>JobRole : {item.jobRole}</li>
                        
                        <li>Salary : {item.salary}</li>
                        
                      </ul>
                    </div>
                    <div className=" col-md-4">
                       <div className="col-md-4">
                         <button  className='btn btn-danger mt-4' onClick={() => deleteItem(item.appliedListId)}>Remove</button>
                       </div>
                       
                    </div> 
                    
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  );
}
