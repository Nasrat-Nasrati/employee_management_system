import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import EmployeeForm from './components/EmployeeForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  return (
    <div>
      {isLoggedIn ? (
        <EmployeeForm />
      ) : (
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
