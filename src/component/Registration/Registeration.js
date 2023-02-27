import React, { useState,useEffect } from 'react'
import { Link,useNavigate} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { createUser } from "../../actions/users";
import { useForm } from 'react-hook-form';
import './Registration.css';

const Registeration = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const navigation = useNavigate();

    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.userReducer)

    const onSubmit = (datavalue) => {
      const {name,phone,email,password} = datavalue
      const data = {
        name:name,
        phone:phone,
        email:email,
        password:password
      }
        dispatch(createUser(data))
    }

    useEffect(()=>{
      if(Object.keys(currentUser.user).length === 0){
        console.log("length null")
       }else{
         navigation('/login')
       }
    },[currentUser])

  return (
    <>
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Registration</h3>
        <div className="form-group mt-3">
          <label>Name</label>
          <input
            type="text"
            name='name'
            className="form-control mt-1"
            placeholder="Enter Name"
           onChange={(e)=>setName(e.target.value)}
           {...register('name', { required: true })}
          />
           {errors.name && <p> name is required.</p>}
        </div>
        <div className="form-group mt-3">
          <label>Phone No</label>
          <input
            type="number"
            name="phone"
            className="form-control mt-1"
            placeholder="Enter Phone No"
           onChange={(e)=>setPhone(e.target.value)}
           {...register('phone', { required: true })}
          />
          {errors.phone && <p> number is required.</p>}
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control mt-1"
            placeholder="Enter Email"
           onChange={(e)=>setEmail(e.target.value)}
           {...register('email', { required: true })}
          />
          {errors.email && <p> email is required.</p>}
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control mt-1"
            placeholder="Enter Password"
            onChange={(e)=>setPassword(e.target.value)}
            {...register('password', { required: true })}
          />
              {errors.password && <p> password is required.</p>}
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type='submit' className="btn btn-primary" 
          >
          Registration
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
        <Link to={'/login'}> Login?</Link>
        </p>
      </div>
    </form>
  </div>
</>
  )
}

export default Registeration