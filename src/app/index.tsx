import React from 'react';

import { HashRouter, Routes, Route } from 'react-router-dom';

import { CustomPage } from '../pages';

export const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<CustomPage />}></Route>
                <Route path="/redux" element={<CustomPage />}></Route>
            </Routes>
        </HashRouter>
    );
};
