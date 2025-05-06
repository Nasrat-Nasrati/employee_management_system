// import React, { useState } from 'react';
// import { login } from '../services/api';
// import './LoginForm.css'

// function LoginForm({ onLogin }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await login(username, password);
//       localStorage.setItem('token', data.token); // ذخیره توکن در لوکال
//       onLogin(); // رفتن به صفحه CRUD بعد از لاگین
//     } catch (error) {
//       alert('Login failed!');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//       <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default LoginForm;


import React, { useState } from 'react';
import { login } from '../services/api';
import './LoginForm.css';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      localStorage.setItem('token', data.token);
      onLogin();
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">🔒 Welcome Back</h2>
        <input
          className="input-field"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="input-field"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="submit-button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
