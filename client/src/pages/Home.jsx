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
            <section>
                <h2>Unable to display profile information.</h2>
            </section>
        );

    return (
        <article className='profile'>
            <img
                src={user?.picture}
                alt='Unable to load profile photo'
                className='profile__picture'
            />
            <h2 className='profile__name'>{user.displayName}</h2>
            <a href={'mailto:' + user.email} className='profile__email'>
                {user.email}
            </a>
        </article>
    );
};
