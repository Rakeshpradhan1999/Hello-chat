import React, {useState, createContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {auth} from '../firebase';

export const AuthContext = createContext ();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState (null);
  const [loading, setLoading] = useState (true);
  const history = useHistory ();
  useEffect (
    () => {
      auth.onAuthStateChanged (user => {
        setUser (user);
        setLoading (false);
        if (user) {
          history.push ('/chats');
        }
      });
    },
    [user, history]
  );

  return (
    <AuthContext.Provider value={user}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
