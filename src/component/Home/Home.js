import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from "../../actions/users";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Home = ({username}) => {


  console.log("username",username);

  
  const dispatch = useDispatch();

  const navigation = useNavigate()
  const token = localStorage.getItem('token');
  const handleSubmit = () => {
      const instance = axios.create({
        baseURL: 'http://localhost:4000/users',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      instance.get('/logout')
      .then((res)=>{
        console.log(res)
        localStorage.clear();
        navigation('/')
        dispatch(clearUser())
      })
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           {!username ? '' : username } 
          </Typography>
          {!username ?<><Link to={'/registration'}  style={{color:"white",textDecoration:"none"}}><Button color="inherit">Registration</Button></Link> 
         <Link to={'/login'} style={{color:"white",textDecoration:"none"}}><Button color="inherit">Login</Button></Link>
         </>: <Button color="inherit" onClick={()=>handleSubmit()}>Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Home;