import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle}= useAuth();
    const location = useLocation()
    return (
        <div className="d-flex justify-content-center">
            <div>
            <h2 className="text-center">Login</h2>
                <form onSubmit="">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <p>new user <Link to="/register">Create New Account</Link></p>
                <button
                className="btn btn-primary px-5"
                onClick={signInUsingGoogle}
                >Sign is google</button>
            </div>
            
        </div>
    );
};

export default Login;