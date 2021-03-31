import React, {useState} from 'react';
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom'
import {login} from "../../store/auth/actions";
import {Link} from 'react-router-dom'
import ErrorToast from "../shared/ErrorToast";
import {
  Avatar,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Button,
  Link as LinkMU
} from "@material-ui/core";
import LockIcon from '@material-ui/icons/Lock';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: `#1a1a1a !important`,
    color: "white"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: `${theme.spacing(3, 0, 2)} !important`,
    backgroundColor: "#1a1a1a !important"
  },
}));
const LoginForm = ({dispatch, loading, hasErrors, isLoggedIn}) => {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate color='secondary'>
            <TextField
              variant="outlined"
              margin="normal"
              type="text"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="text"
              color='secondary'
              autoFocus
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              color='secondary'
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            {/*<FormControlLabel*/}
            {/*  control={<Checkbox value="remember" color="primary"/>}*/}
            {/*  label="Remember me"*/}
            {/*/>*/}
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={() => {
                dispatch(login(process.env["REACT_APP_SESSION_URL"], {username, password})).then(res => {
                  if (res) // history.push('/myaccount');
                    history.goBack();
                  else
                    setLoginError(true);
                })
              }}
            >
              Sign In
            </Button>
            <Grid container className='mt-2'>
              <Grid item>
                <LinkMU component={Link} to="/signup" color='secondary'>
                  "Don't have an account? Sign Up"
                </LinkMU>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      {!loading && loginError && <ErrorToast error={loginError} message='Invalid Credentials'/>}
    </>
  );
}
const mapStateToProps = state => ({
  loading: state.auth.loading,
  isLoggedIn: state.auth.isLoggedIn,
  hasErrors: state.auth.hasErrors
});
export default connect(mapStateToProps)(LoginForm);
