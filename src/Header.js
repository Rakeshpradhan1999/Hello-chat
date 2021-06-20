import React from 'react';
import {useHistory} from 'react-router-dom';

const Header = ({auth}) => {
  const history = useHistory ();

  const handleLogout = async () => {
    await auth.signOut ();
    history.push ('/');
  };

  return (
    <header className="header">
      <div className="logo">
        Hello Chat
      </div>
      <div className="logout" onClick={handleLogout}>
        Logout
      </div>

    </header>
  );
};

export default Header;
