import React, { useState } from 'react';

interface Credentials {
  username: string;
  password: string;
}

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [credentials, setCredentials] = useState<Credentials>({ username: '', password: '' });

  const handleLogin = () => {
    // In a real application, you would validate credentials against a server
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      onLogin();
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={credentials.username}
        onChange={e => setCredentials({ ...credentials, username: e.target.value })}
        placeholder="Username"
      />
      <input
        type="password"
        value={credentials.password}
        onChange={e => setCredentials({ ...credentials, password: e.target.value })}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
