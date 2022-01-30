import React from 'react';

import { HashRouter, Routes, Route } from 'react-router-dom';

import { SimplePage } from '../pages/simple';

export const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<SimplePage />}></Route>
                <Route path="/redux" element={<SimplePage />}></Route>
            </Routes>
        </HashRouter>
    );
};
