import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, Redirect, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authContext } from "../../contexts/user-auth-context/user-auth-context";



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function SignIn(props) {

  const classes = useStyles();
  const { authErrMsg, login } = useContext(authContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);

  const dispatch = useDispatch();

 

  const handleSigninSubmit = (event) => {
    event.preventDefault();
    login({ userName, password });

  };

  const loggedIn = (e) => {

    e.preventDefault();
    
    if(userName === "admin" && password === "admin123"){

      setLogged(true)

    }
    else{
      alert("enter correct password")
    }

    localStorage.setItem("token","iloveindia")

  }

    if(logged === true){
      return <Redirect to="/dashboard"/> 
    }
    
    

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin Login
        </Typography>
        {/* <p>{authErrMsg}</p>
           */}
        <form className={classes.form} noValidate onSubmit={loggedIn}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            type="password"
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button style={{marginLeft:"-1%"}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log IN
          </Button>

        </form>
      </div>

    </Container>
  );
}
export default withRouter(SignIn);
