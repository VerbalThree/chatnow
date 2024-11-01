import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/authActions.js';
import { Link } from 'react-router-dom';

function Register() {
    console.log("Register component is rendered");
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ username: '', email: '', password: ''});
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});       
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formData));
    };

    return (
        <div className="container mt-5">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Username</label>
                    <input type="text" name="username" onChange={handleChange} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" name="email" onChange={handleChange} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleChange} className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form><br></br>
            <p>Already have an account? <Link to="/login">Login into it</Link></p>
        </div>
    );
}

export default Register;