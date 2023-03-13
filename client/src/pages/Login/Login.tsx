import React from 'react';
import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <div className='flex v-[100vw] h-[100vh]'>
            <img className='hidden sm:block w-[60vw] object-cover h-[100vh]' src="/homepage.jpg" alt="homepage"/>
            <div className='flex justify-center items-center w-[100vw] sm:w-[40vw]'>
                <LoginForm/>
            </div>
        </div>
    );
};

export default Login;