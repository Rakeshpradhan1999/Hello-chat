import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import AuthProvider from './contexts/AuthContext';

const App = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/chats" exact component={Chat} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
