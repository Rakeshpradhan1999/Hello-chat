import React from 'react';
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons';
import firebase from 'firebase/app';
import {auth} from '../firebase';

const Login = () => {
  return (
    <div className="login-page">
      <div className="card">
        <h3 className="login-title">Welcome to Hello-Chat!</h3>
        <div
          className="btn google"
          onClick={() =>
            auth.signInWithRedirect (new firebase.auth.GoogleAuthProvider ())}
        >
          <span><GoogleOutlined /></span> Login with Google{' '}
        </div>
        <div
          className="btn facebook"
          onClick={() =>
            auth.signInWithRedirect (new firebase.auth.FacebookAuthProvider ())}
        >
          <span><FacebookOutlined /></span> Login with Facebook{' '}
        </div>

      </div>
    </div>
  );
};

export default Login;
