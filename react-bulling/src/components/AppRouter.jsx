import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes} from '../router';
import Error from '../pages/error/Error';

const AppRouter = () => {
    return (
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    key={route.path}
                    element={<route.component />}
                    path={route.path}
                    exact={route.exact}
                />
            )}
            <Route path="/" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Error/>} />
        </Routes>
    );
};

export default AppRouter;
