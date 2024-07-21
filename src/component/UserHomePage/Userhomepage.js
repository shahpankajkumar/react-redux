import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Home from '../Home/Home'
import './Userhomepage.css'
import { Link, useNavigate } from 'react-router-dom'
import { findUserData,deleteTask } from "../../actions/users";
import { useSelector,useDispatch } from "react-redux";
const Userhomepage = () => {
  
    const navigation = useNavigate();
    const [data,setData] = useState('');

    const email = localStorage.getItem('email');
    const username = localStorage.getItem('uname');

    const dispatch = useDispatch();

    const finduser = useSelector(state => state.userReducer)

    useEffect(()=>{
      dispatch(findUserData(email))
    },[])

    useEffect(() => {
      const token = localStorage.getItem('token');
      if(!token){
        navigation('/')
      }
       setData(finduser.display)
    },[finduser]);


    const handleDelete = (id) => {
      dispatch(deleteTask(id))
    }

  const userPage = () => {
    navigation('/Task')
  }

  return (
    <>
      <Home username={username} />
      <div className='main'>
        <button type="button" className="btn btn-success" onClick={()=>userPage()}>Add Task</button>
        <div className='col-md-12 mt-5'>
            <div className='col-md-8'>
            <table className="table">
            <thead className="table-light">
             <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Hours</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
             </tr>
            </thead>
            <tbody>
            {
              data[0]?.tasks.map((res)=>{
                return(
                  <tr key={res.id}>
                    <td>{res.title}</td>
                    <td>{res.desc}</td>
                    <td>{res.hours}</td>
                    <td>{res.updatedAt}</td>
                    <td><button type="button" class="btn btn-info"><Link to={`/Task/${res.id}`}  style={{textDecoration:"none"}}>Edit</Link></button></td>
                    <td><button type="button" class="btn btn-danger" onClick={()=>handleDelete(res.id)} >Delete</button></td>
                  </tr>
                )
              })
             }
            </tbody>
          </table>
            </div>
        </div>
      </div>
    </>
  )
}

export default Userhomepage