import axios from 'axios';

export const getAccountInformation = async () => {
    try {
        const res = await axios.get('http://localhost:3001/auth/account', {
            withCredentials: true,
        });
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export const redirectToGoogleAuth = async () => {
    window.open('http://localhost:3001/auth/google', '_self');
};
