import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Registration from './component/Registration/Registeration'
import Userhomepage from "./component/UserHomePage/Userhomepage";
import Task from "./component/Taskpage/Task";
function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/userhome" element={<Userhomepage/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/registration" element={<Registration/>} />
      <Route exact path="/task" element={<Task/>} />
      <Route exact path="/task/:id" element={<Task/>} />
     </Routes>
    </div>
  );
}

export default App;
