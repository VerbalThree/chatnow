import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { Routes, Route } from 'react-router-dom';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Home from './components/Home.js';

function App() {

  // Getting the state of authentication from Redux
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>

        {/* Redirect to /Home if the user is authenticated, otherwise to /Login */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} />

        {/* The route /Home can only be acessed if the user is authenticated */}
        <Route path="/Home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;

// Possible problems with the code:

// 1. Missing Error Handling: The code does not handle cases where the authentication state is not available 
// or is in an unknown state. It assumes that isAuthenticated will always be a boolean value.

// 2. Lack of Authorization: The code only checks for authentication, but does not check for authorization. 
// This means that even if a user is authenticated, they may not have permission to access certain routes.

// 3. Missing Route Protection: The /register route is not protected, which means that authenticated users can 
// still access it. Depending on the application's requirements, this might be a security issue.

// 4. No Handling for Unmatched Routes: The code does not define a catch-all route for unmatched URLs. 
// This can lead to a poor user experience if the user navigates to an unknown route.

// 5. No Server-Side Rendering (SSR) Support: The code assumes a client-side rendering (CSR) approach. 
// If the application uses server-side rendering (SSR), the authentication checks may not work as expected.