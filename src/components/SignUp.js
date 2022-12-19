import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {signUp} from '../state/reduxReducers/userReducers';
// import React from 'react'
// import {useNavigate} from 'react-router-dom'

function SignUp() {
  // const navigate = useNavigate()
const dispatch = useDispatch();
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    function onClick() {
    //   console.log('sign up data = ',userName ,email, password)
      let obj = {
        name:userName,
        email:email,
        password:password
      }
      console.log('obj=>',obj)
        dispatch(signUp(obj));
    // navigate('/');
     
    }

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
              <div className='text-center'><h1>Sign Up</h1></div>
                
                  <div className="col-md-12 mb-4">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form3Example1">First name</label>

                      <input type="text" id="uName" className="form-control"   onChange={(e) => setUserName(e.target.value)} />
                    </div>
                  </div>
                 

                
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">Email address</label>

                  <input type="email" id="uEmail" className="form-control"   onChange={(e) => setEmail(e.target.value)}/>
                </div>

                
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example4">Password</label>

                  <input type="password" id="uPassword" className="form-control"  onChange={(e) => setPassword(e.target.value)} />
                </div>

             
        

                <center>
               <button type="button" className="btn btn-primary btn-block mb-4" onClick={()=>onClick()} >
                  Sign up
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
  )
}
 export default SignUp;