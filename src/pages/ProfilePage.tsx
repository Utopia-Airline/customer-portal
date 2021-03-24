import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import User from "../models/User";
import "../styles/components/ProfilePage.scss";
import {getAuth} from "../store/auth/actions";
import {Link} from 'react-router-dom';

const ProfilePage = ({dispatch, loading, hasErrors, user, isLoggedIn}: UserProps) => {
  useEffect(() => {
    console.log('get auth', user);
    if (isLoggedIn && !user)
      dispatch(getAuth(process.env["REACT_APP_SESSION_URL"]));
  }, [])
  return (
    <div>
      {loading && <div>loading profile...</div>}
      {hasErrors && <div>Unable to display user profile</div>}
      {user &&
      <>
        <div className="user-profile">
          <div className="pic">
            <i className="fab fa-buffer text-gray-dark" style={{fontSize: "100px"}}/>
          </div>
          <div>
            <h4 className="m-2 text-gray-dark">{user?.givenName.toUpperCase()} {user?.familyName.toUpperCase()}</h4>
            <div className="d-flex align-items-center m-2 text-gray-light">
              <div className="d-flex m-2 align-items-center">
                <i className="fas fa-envelope mr-1 mt-1"/>
                <div>{user?.email}</div>
              </div>
              <div className="d-flex m-2 align-items-center">
                <i className="fas fa-user mr-1"/>
                <div className="d-inline">{user?.role?.name}</div>
              </div>
            </div>
          </div>
          <div className="col">
            <Button as={Link} to='/myaccount/update'>Update</Button>
          </div>
        </div>
        <div className="user-tasks">
          <div className="h2"> There is no active task for today</div>
        </div>
      </>
      }
    </div>
  );
}

interface UserProps {
  dispatch?: Function;
  loading?: boolean;
  user?: User;
  hasErrors?: boolean;
  isLoggedIn: boolean;
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  user: state.auth.user,
  hasErrors: state.auth.hasErrors,
  isLoggedIn: state.auth.isLoggedIn
});
export default connect(mapStateToProps)(ProfilePage);
