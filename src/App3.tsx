import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getPublicRoutes } from './Routes';

const publicRoutes = getPublicRoutes();

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* === Public Route === */}
      {publicRoutes.map(
        (route) =>
          !route.isDisabled && (
            <Route
              key={route.path}
              index={route.isIndex}
              caseSensitive={route.isCaseSensitive}
              path={route.path}
              element={route.element}
            />
          ),
      )}
    </Routes>
  </BrowserRouter>
);

export default App;
