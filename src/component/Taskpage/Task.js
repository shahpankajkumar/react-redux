import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import './Task.css';
import Home from '../Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import {
  inserttask,
  findTask,
  clearTask,
  updateTask,
  clearTUpdate,
} from "../../actions/users";

function Task() {

  const navigation = useNavigate();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [hours, setHours] = useState('');
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('uname');
  const uid = localStorage.getItem('userid');
  const { id } = useParams()

  const dispatch = useDispatch();
  const currentTask = useSelector(state => state.userReducer)

  const handleSubmit = () => {
    const data = {
      uid: uid,
      title: title,
      desc: desc,
      hours: hours
    };
    dispatch(inserttask(data))
  }
  useEffect(() => {
    if (!token) {
      navigation('/')
    }
    if (Object.keys(currentTask.task).length === 0) {
      console.log("length null")
    } else {
      navigation('/userhome')
      dispatch(clearTask())
    }
    if (Object.keys(currentTask.taskUpdate).length === 0) {
      console.log("length null")
    } else {
      navigation('/userhome')
      dispatch(clearTUpdate())
    }
  }, [currentTask])


  useEffect(() => {
    dispatch(findTask({ id, setTitle, setDesc, setHours }))
  }, []);


  const handleUpdate = () => {
    const data = {
      uid: uid,
      title: title,
      desc: desc,
      hours: hours
    };
    dispatch(updateTask({ id, data }))
  }

  return (
    <>
      <Home username={username} />
      <div>
        <div className="Auth-form-container-user">
          <form className="Auth-form-user data">
            <div className="Auth-form-content-user">
              <h3 className="Auth-form-title-user">{!id ? "Insert Task" : "Update Task"} </h3>
              <div className="form-group mt-3">
                <label>Project Title</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Project Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Task Description</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Task Description"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>hours</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Hours"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                />
              </div>
              {!id ? <><div className="d-grid gap-2 mt-3">
                <button type='button' className="btn btn-primary"
                  onClick={() => handleSubmit()}
                >
                  Insert
                </button>
              </div></> : <><div className="d-grid gap-2 mt-3">
                <button type='button' className="btn btn-primary"
                  onClick={() => handleUpdate()}
                >
                  update
                </button>
              </div></>}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Task