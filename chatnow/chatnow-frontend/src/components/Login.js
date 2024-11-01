import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/authActions';
import { Link } from 'react-router-dom'

function Login() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ username: '', password: ''});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(formData));
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Username</label>
                    <input type="text" name="username" onChange={handleChange} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleChange} className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form><br></br>
            <p>Doens't have an account? <Link to="/register">Create one</Link></p>
        </div>
    );
}

export default Login;