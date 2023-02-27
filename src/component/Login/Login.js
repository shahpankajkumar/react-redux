import React, { useState, useEffect } from 'react'
import {  useNavigate } from "react-router-dom";
//import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { retrieveLogin,clearUser } from "../../actions/users";
import './Login.css'
const Login = () => {

  const navigation = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const currentUserlogin = useSelector(state => state.userReducer)

  const handleSubmit = () => {
    const data = {
      email: email,
      password: password
    }
    dispatch(retrieveLogin(data))
  }

  useEffect(()=>{
    if(Object.keys(currentUserlogin.login).length === 0){
      console.log("length null")
     }else{
      navigation('/userhome')
     }
  },[currentUserlogin])

  const navigate = () => {
    navigation('/registration')
    dispatch(clearUser())
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary"
              onClick={() => handleSubmit()}
            >
              Login
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            <span style={{cursor:"pointer",color:"blue",textDecoration:"underline"}} onClick={()=>navigate()}> Registaration?</span>
          </p>
        </div>
      </form>
    </div>
  )
}
export default Login;