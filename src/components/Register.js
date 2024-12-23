import React, { useState } from 'react'
import EmployeeService from '../services/Employee/EmployeeService';
import { useNavigate } from 'react-router-dom';
import CustomerService from '../services/Customer/CustomerService';
import PopUp from './PopUp';


export default function Register() {

  const [nameCus, setNameCus] = useState("");
  const [usernameCus, setUsernameCus] = useState("");
  const [passwordCus, setPasswordCus] = useState("");
  const [confirmPasswordCus, setConfirmPasswordCus] = useState("");
  const [age, setAge] = useState();
  const navigate = useNavigate();

  
  function validateCustomer(){
      if (nameCus === "" || usernameCus === "" || passwordCus === "" || confirmPasswordCus === "") {
        alert("Please fill in all fields");
      }
      if(usernameCus[0].toLocaleLowerCase() !== 'c'){
        alert("User Name must start with C");
      } else if (passwordCus !== confirmPasswordCus) {
        alert("Passwords do not match");
      } else {
        const customer = {"name":nameCus, "password":passwordCus, "username":usernameCus,"age":age};
          console.log(customer);
          CustomerService.createCustomer(customer).then((res) => {
            console.log(res.data);
            navigate('/');

          }).catch((e) => console.log(e));
      }
  }

  return (<>
    
    <div className='d-xl-flex'>
        <div className='p-xl-5'>
        <div className='text-center bg-danger'>
          Register as a Customer
        </div>
        <form className='m-5'>
              <div className="mb-3">
                    <label htmlFor="exampleInputEmail4" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" value={nameCus} onChange={(e) => {setNameCus(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail2" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" value={usernameCus} onChange={(e) => {setUsernameCus(e.target.value)}}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="text" className="form-control" id="age" value={age} onChange={(e) => {setAge(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword3" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword3" value={passwordCus} onChange={(e) => {setPasswordCus(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword4" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword4" value={confirmPasswordCus} onChange={(e) => {setConfirmPasswordCus(e.target.value)}}/>
                </div>
                <button id='customer' type="submit" className="btn btn-primary" onClick={validateCustomer}>Submit</button>
            </form>
    </div>
  </div>
  </>
  )
}
