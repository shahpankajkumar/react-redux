import axios from 'axios'
const create = async(data) => {
  let res = axios.post("http://localhost:5000/api/auth/signup",data);
 console.log("registerapi",res)
 return res
};
;
const login = async(data) => {
 let res = await axios.post("http://localhost:5000/api/auth/login",data);
    localStorage.setItem('email',data.email);
   localStorage.setItem('token',res.data.token);
   console.log("loginuserapi",res)
   return res
};

const addTask = async(data) => {
 let token = localStorage.getItem('token');
  let instance = await  axios.create({
    baseURL: 'http://localhost:5000/api/auth/users',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
 let res = instance.post('/taskinsert', data)
    return res
 };


 const findUser = async(email) => {
  let token = localStorage.getItem('token');
   let instance = await  axios.create({
     baseURL: 'http://localhost:5000/users',
     headers: {
       Authorization: `Bearer ${token}`
     }
   });
  let res = instance.get(`/userfind/${email}`)
     return res
  };


 const displayTaskApi = async(id) => {
  let token = localStorage.getItem('token');
   let instance = await  axios.create({
     baseURL: 'http://localhost:5000/users',
     headers: {
       Authorization: `Bearer ${token}`
     }
   });
  let res = instance.get(`/taskdispkay/${id}`)
     return res
  };

  const findtaskApi = async(id) => {
    let token = localStorage.getItem('token');
     let instance = await  axios.create({
       baseURL: 'http://localhost:5000/users',
       headers: {
         Authorization: `Bearer ${token}`
       }
     });
    let res = instance.get(`/findTask/${id}`)
       return res
    };

    const deleteTaskApi = async(id) => {
      let token = localStorage.getItem('token');
       let instance = await  axios.create({
         baseURL: 'http://localhost:5000/users',
         headers: {
           Authorization: `Bearer ${token}`
         }
       });
      let res = instance.delete(`/taskdelete/${id}`)
         return res
      };

      const taskUpdateApi = async({id,data}) => {
        let token = localStorage.getItem('token');
         let instance = await  axios.create({
           baseURL: 'http://localhost:5000/users',
           headers: {
             Authorization: `Bearer ${token}`
           }
         });
        let res = instance.put(`/taskupdate/${id}`, data)
           return res
        };

const UserService = {
  create,
  login,
  addTask,
  findUser,
  displayTaskApi,
  findtaskApi,
  deleteTaskApi,
  taskUpdateApi,
};

export default UserService;