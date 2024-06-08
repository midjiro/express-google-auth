import React from 'react';
import { NavLink } from 'react-router-dom';
import { redirectToGoogleAuth } from '../services/auth';

export const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 md:px-16 md:py-4 bg-white shadow-sm   '>
            <h1 className='text-xm md:text-xl font-sans'>Express Auth</h1>
            <nav className='flex items-center gap-4 '>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        isActive
                            ? 'text-sm md:text-base text-black'
                            : 'text-sm md:text-base text-gray-500'
                    }
                >
                    Home
                </NavLink>
                <button
                    className='block rounded-md  px-4 py-2 transition-all duration-200 bg-black hover:bg-white text-sm md:text-base text-white hover:text-black border border-solid border-slate-100 shadow-sm'
                    onClick={redirectToGoogleAuth}
                >
                    Login
                </button>
            </nav>
        </header>
    );
};
