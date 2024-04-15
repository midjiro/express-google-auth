import React from 'react';
import { redirectToGoogleAuth } from '../services/auth';

export const Login = () => {
    return (
        <section className='login'>
            <h2>Login With Google</h2>
            <button onClick={redirectToGoogleAuth} className='login__btn'>
                Login
            </button>
        </section>
    );
};
