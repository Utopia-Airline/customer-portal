import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom'
import {login} from "../store/auth/actions";
import {Link} from 'react-router-dom'

const LoginForm = ({dispatch, loading, hasErrors, isLoggedIn}) => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Form className='m-5' style={{maxWidth: "500px"}}>
      <Form.Group className='d-flex' controlId="formUsername">
        <i className="fa fa-user align-self-center  mr-2 h3"/>
        <Form.Control type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
      </Form.Group>

      <Form.Group className='d-flex' controlId="formPassword">
        <i className="fa fa-lock align-self-center  mr-2 h3"/>
        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      {/*<Form.Group controlId="formCheckbox">*/}
      {/*  <Form.Check type="checkbox" label="save password"/>*/}
      {/*</Form.Group>*/}
      <Button variant="primary" type="button"
              onClick={() => {
                dispatch(login(process.env["REACT_APP_SESSION_URL"], {username, password})).then(res => {
                  if (res)
                    history.push('/myaccount');
                  else
                    console.log('isLoggedIn', isLoggedIn, res);
                })
              }}>
        Login
      </Button>
      <Link className="d-flex"to="/signup">Signup</Link>
    </Form>
  );
}
const mapStateToProps = state => ({
  loading: state.auth.loading,
  isLoggedIn: state.auth.isLoggedIn,
  hasErrors: state.auth.hasErrors
});
export default connect(mapStateToProps)(LoginForm);
