import React from 'react';
import useForm from '../hooks/useForm';
import '../App.css';
const RegisterForm = () => {
    const { formData, handleChange, handleSubmit } = useForm();
    return (
        <div className="register-form">
            <div className="register-form-header">
                <h1>Register</h1>
            </div>
            <form className="register-form-input" onSubmit={handleSubmit}>
                <div className="register-form-input-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="register-form-input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="register-form-input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;
