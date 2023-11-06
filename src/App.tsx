import React from 'react';
import './App.css';
import { Switch } from 'antd';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { getDashboardRoutes, getPublicRoutes } from './Routes';
// import { DashboardLayout } from './Layouts';

// const publicRoutes = getPublicRoutes();
// const dashboardRoutes = getDashboardRoutes();

const App = () => (
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<DashboardLayout />}>
  //       {dashboardRoutes.map(
  //         (route) =>
  //           !route.isDisabled && (
  //             <Route
  //               key={route.path}
  //               index={route.isIndex}
  //               caseSensitive={route.isCaseSensitive}
  //               path={route.path}
  //               element={route.element}
  //             />
  //           )
  //       )}
  //     </Route>
  //     {/* === Public Route === */}
  //     {publicRoutes.map(
  //       (route) =>
  //         !route.isDisabled && (
  //           <Route
  //             key={route.path}
  //             index={route.isIndex}
  //             caseSensitive={route.isCaseSensitive}
  //             path={route.path}
  //             element={route.element}
  //           />
  //         )
  //     )}
  //   </Routes>
  // </BrowserRouter>
  <Switch />
);

export default App;
