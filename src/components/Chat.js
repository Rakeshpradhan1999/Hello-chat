import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {ChatEngine} from 'react-chat-engine';
import Header from '../Header';
import {auth} from '../firebase';
import {AuthContext} from '../contexts/AuthContext';
import {useHistory} from 'react-router-dom';

const Chat = () => {
  const [loading, setLoading] = useState (true);
  const user = useContext (AuthContext);
  const history = useHistory ();

  const getFile = async url => {
    const response = await fetch (url);
    const data = await response.blob ();
    return new File ([data], 'userPhoto.jpg', {type: 'image/jpeg'});
  };

  useEffect (
    () => {
      if (!user) {
        history.push ('/');
        return;
      }

      axios
        .get ('https://api.chatengine.io/users/me', {
          headers: {
            'project-id': process.env.REACT_APP_projectId,
            'user-name': user.email,
            'user-secret': user.uid,
          },
        })
        .then (() => {
          setLoading (false);
        })
        .catch (() => {
          let formData = new FormData ();
          formData.append ('email', user.email);
          formData.append ('username', user.email);
          formData.append ('secret', user.uid);
          getFile (user.photoURL).then (avatar =>
            formData.append ('avatar', avatar, avatar.name)
          );

          axios
            .post ('https://api.chatengine.io/users', formData, {
              headers: {'private-key': process.env.REACT_APP_PROJECT_SECRET},
            })
            .then (() => setLoading (false))
            .catch (error => console.log (error));
        });
    },
    [history, user]
  );

  if (!user || loading) {
    return 'Loading';
  }

  return (
    <div>
      <Header auth={auth} />
      <ChatEngine
        height="calc(100vh - 70px)"
        projectID={process.env.REACT_APP_projectId}
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chat;
