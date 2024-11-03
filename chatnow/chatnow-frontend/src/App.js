import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { Routes, Route } from 'react-router-dom';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import NotFound from './components/NotFound.js';

function App() {

  // Getting the state of authentication from Redux
  const { isAuthenticated, userRole } = useSelector(state => ({
    isAuthenticated: state.auth.isAuthenticated,
    userRole: state.auth.user?.role,
  }));

  // Redirecting based on the authentication state
  const getRedirectPath = () => {
    if (isAuthenticated === undefined){
      return <div>Loading...</div>;
    } else if (isAuthenticated) {
      return <Navigate to="/home" />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <Router>
      <Routes>

        <Route path="/" element={getRedirectPath()} />

        {/* The route /Home can only be acessed if the user is authenticated */}
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />

        {/* Protect the routes /register and /login from authenticated users, so they can't access it */}
        <Route path="/register" element={isAuthenticated ? <Navigate to="/home" /> : <Register />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />

        {/* Route catch all to take care for unmatched routes */ }
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;

// Possible problems with the code:

// 1. No Server-Side Rendering (SSR) Support: The code assumes a client-side rendering (CSR) approach. 
// If the application uses server-side rendering (SSR), the authentication checks may not work as expected.

// 2. Redux State Inconsistency: The code assumes that the state.auth.isAuthenticated and state.auth.user?.role properties 
// are always present in the Redux store. If these properties are not defined or 
// have a different structure, it could lead to errors.

// 3. Unhandled Errors: he code does not handle errors that may occur during the authentication process. 
// For example, if the authentication API returns an error, the code does not provide a way to handle 
// or display the error to the user.

// 4. Inconsistent Naming: The code uses different naming conventions for the same concept. 
// For example, the isAuthenticated property is used in the Redux state, but the authenticated variable 
// is used in the getRedirectPath function. This inconsistency can make the code harder to understand and maintain.

// 5. Lack of Type Checking: The code does not perform any type checking for the isAuthenticated and userRole variables. 
// If the Redux store returns unexpected data types, it could lead to unexpected behavior or errors.

// 6. Lack of Error Handling: The code does not handle errors that may occur during the Redux state retrieval. 
// If the useSelector hook fails to retrieve the state, it could lead to unexpected behavior or errors.

// 7. Inconsistent Route Handling: The code uses both the element and Navigate components to handle routes. 
// It would be better to use a consistent approach throughout the code.