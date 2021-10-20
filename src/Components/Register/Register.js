import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>Register</h2>
                <form onSubmit="">
                   <input type="email" name="" id="" placeholder="Your Email" />
                   <br /> 
                   <input type="password" name="" id="" placeholder="Enter Your Password" />
                   <br />
                   <input type="password" name="" id="" placeholder="Enter Your Password" />
                   <br/>
                   <input type="submit" value="Submit" />
                </form>
                <p>new user <Link to="/register"></Link>Create New Account</p>
                <div>
                    ---------------or-------------
                </div>
                <button className="btn btn-primary">Sign is google</button>
            </div>
        </div>
    );
};

export default Register;