import React, { useState } from 'react'
import EmployeeService from '../services/Employee/EmployeeService';
import { useNavigate } from 'react-router-dom';

export default function RegisterEmp() {
    
      const [nameEmp, setNameEmp] = useState("");
      const [usernameEmp, setUsernameEmp] = useState("");
      const [passwordEmp, setPasswordEmp] = useState("");
      const [confirmPasswordEmp, setConfirmPasswordEmp] = useState("");

  const navigate = useNavigate();

    const validateEmployee = (e) => {
        e.preventDefault();
        
        if (nameEmp === "" || usernameEmp === "" || passwordEmp === "" || confirmPasswordEmp === "") {
          alert("Please fill in all fields");
        }
        if(usernameEmp[0].toLocaleLowerCase() !== 'e'){
          alert("User Name must start with E");
        }
        else if (passwordEmp !== confirmPasswordEmp) {
          alert("Passwords do not match");
        } else {
          const employee = {"name":nameEmp, "password":passwordEmp, "userName":usernameEmp};
          // console.log(employee);
          EmployeeService.createEmployee(employee).then((res) => {
            // console.log(res.data);
            navigate('/');
    
          }).catch((e) => console.log(e));
        }
        
      }
  return (
    <>
    <div className='d-xl-flex'>
        <div className='p-xl-5'>
          <div className='text-center bg-danger'>
            Register as an Employee
          </div>
            <form className='m-5'>
              <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={nameEmp} onChange={(e) => {setNameEmp(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail3" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" value={usernameEmp} onChange={(e) => {setUsernameEmp(e.target.value)}}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={passwordEmp} onChange={(e) => {setPasswordEmp(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" value={confirmPasswordEmp} onChange={(e) => {setConfirmPasswordEmp(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => {validateEmployee(e)}}>Submit</button>
            </form>
        </div>
        </div>
    </>
  )
}
