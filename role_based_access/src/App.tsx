import React, { useState } from 'react';
import MainApp from './Components/MainApp';
import Login from './Components/Login';


const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <MainApp />
      ) : (
        <Login onLogin={login} />
      )}
    </div>
  );
};

export default App;
