import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../app/App';

import { Home } from '../pages/Home';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
