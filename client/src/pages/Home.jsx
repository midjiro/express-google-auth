import { useState, useEffect } from 'react';
import { getAccountInformation } from '../services/auth';

export const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (user) return;
        getAccountInformation().then((data) => setUser(data));
    }, [user]);

    if (!user)
        return (
            <section className='my-16'>
                <h2>Unable to display profile information.</h2>
            </section>
        );

    return (
        <article className='w-fit mx-auto my-16 p-8 flex flex-col md:flex-row items-center  border border-solid border-slate-100 shadow-sm rounded-md overflow-hidden'>
            <img
                src={user?.picture}
                alt='Unable to load profile'
                className='w-16 aspect-square col-span-1 rounded-full object-cover'
            />
            <div className='col-start-2 text-center md:text-left mt-4 md:mt-0 md:mx-4'>
                <h2 className='text-base md:text-lg'>{user.displayName}</h2>
                <a
                    href={'mailto:' + user.email}
                    className='text-sm md:text-base text-slate-500'
                >
                    {user.email}
                </a>
            </div>
        </article>
    );
};
