import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";
import {Button, Form} from "react-bootstrap";
import { addUser } from '../../store/auth/actions';
import {useHistory} from 'react-router-dom'

const AddUserForm = ({dispatch, loading, hasErrors, user}) => {
    const history = useHistory();
    useEffect(() => {
    
    }, [user]);
    const [username, setUsername] = useState('');
    const [givenName, setGivenName] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const role = "CUSTOMER";
  return (
        <Form className='m-5'>
            <Form.Group className='d-flex' controlId="formUsername">
                <i className="fa fa-user align-self-center mr-2 h3"/>
                <Form.Control type="text" placeholder="Enter New Username" onChange={e => setUsername(e.target.value)}/>
            </Form.Group>
            <Form.Group className='d-flex' controlId="formGivenName">
                <i className="fa fa-user align-self-center mr-2 h3"/>
                <Form.Control type="text" placeholder="Enter New Given Name" onChange={e => setGivenName(e.target.value)}/>
            </Form.Group>
            <Form.Group className='d-flex' controlId="formFamilyName">
                <i className="fa fa-user align-self-center mr-2 h3"/>
                <Form.Control type="text" placeholder="Enter New Family Name" onChange={e => setFamilyName(e.target.value)}/>
            </Form.Group>
            <Form.Group className='d-flex' controlId="formEmail">
                <i className="fa fa-user align-self-center mr-2 h3"/>
                <Form.Control type="text" placeholder="Enter New Email" onChange={e => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className='d-flex' controlId="formPhone">
                <i className="fa fa-user align-self-center mr-2 h3"/>
                <Form.Control type="text" placeholder="Enter New Phone Number" onChange={e => setPhone(e.target.value)}/>
            </Form.Group>
            <Form.Group className='d-flex' controlId="formPassword">
                <i className="fa fa-user align-self-center mr-2 h3"/>
                <Form.Control type="text" placeholder="Enter New Password" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="button"
                    onClick={e => 
                        dispatch(addUser(process.env["REACT_APP_USERS_URL"], {username, givenName, familyName, role, email, phone, password}))}
                        >
                            Submit
                        </Button>
        </Form>
  );
}
const mapStateToProps = state => ({
    loading: state.auth.loading,
    user: state.auth.user,
    hasErrors: state.auth.hasErrors
  });
export default connect(mapStateToProps)(AddUserForm);