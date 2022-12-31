import { useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {login} from '../state/reduxReducers/userReducers';
import { useNavigate } from 'react-router-dom';
function SignIn() {
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const val = useSelector((state) => state.signUpvalue.data);
  
  const logSubmit = () =>{
  
console.log(val)

// console.log('data from login =>' ,userObj);
let resp = val.find((e) => {
  // console.log(e)
  //console.log(e.email+" "+loginEmail)
  return e.email === loginEmail
  
})

if(resp === undefined){
  alert("User does not exist")
}else{
  let resp1 = val.find((e) => {

    return e.password === loginPassword
  })
  if(resp1 !== undefined){
    dispatch(login(resp));
    naviagte('/Welcome');
    // console.log(dispatch(login(resp)))
    console.log("User Matched");
   
  }else{
    //console.log('Password does not matched')
  }
}

  }
  const signUpPage = () =>{
  naviagte('/SignUp');
  }
  // function onClick() {
  
    // if (loginEmail === val && loginPassword === val) {
    //   console.log(val);
    // } else if (loginEmail === "" && loginPassword === "") {
    //   console.log("make sure you have signed Up First");
    // } else {
    //   console.log("User Not Matched");
    // }

    
    // dispatch(login(val));/
    // console.log( dispatch(login(val)))
// 
  // }

 

 

  return (
    <>
      <section className="">
        <div className="px-4 py-5 px-md-5 text-center text-lg-start">
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  The best offer <br />
                  <span className="text-primary">for your business</span>
                </h1>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form>
                      <div className="text-center">
                        <h1>Sign In</h1>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3">
                          Email address
                        </label>

                        <input
                          type="email"
                          id="loginEmail"
                          className="form-control"
                          onChange={(e) => setloginEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>

                        <input
                          type="password"
                          id="loginPassword"
                          className="form-control"
                          onChange={(e) => setloginPassword(e.target.value)}
                        />
                      </div>

                      <center>
                        <button
                          type="button"
                          className="btn btn-primary btn-block mb-4"
                          onClick={() => logSubmit()}
                        >
                          Sign In
                        </button>
                        
                        <button
                          type="button"
                          className="btn btn-primary btn-block mb-4 mx-3"
                          onClick={()=>signUpPage()}
                        >
                          Sign Up
                        </button>
                      </center>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SignIn;
