import {
  //
  Page404,
  // Login,
  // Register,
  // ForgotPassword,
  // ResetPassword,
  //
  // Dashboard,
  ActivityPage,
  DetailActivity,
} from '../Views';

export const getPublicRoutes = () => [
  {
    path: '/',
    isIndex: true,
    isCaseSensitive: false,
    isDisabled: false,
    element: <ActivityPage />,
  },
  {
    path: '/detail',
    isIndex: true,
    isCaseSensitive: false,
    isDisabled: false,
    element: <DetailActivity />,
  },
  // {
  //   path: '/login',
  //   isIndex: false,
  //   isCaseSensitive: false,
  //   isDisabled: false,
  //   element: <Login />,
  // },
  // {
  //   path: '/register',
  //   isIndex: false,
  //   isCaseSensitive: false,
  //   isDisabled: false,
  //   element: <Register />,
  // },
  // {
  //   path: '/forgotPassword',
  //   isIndex: false,
  //   isCaseSensitive: false,
  //   isDisabled: false,
  //   element: <ForgotPassword />,
  // },
  // {
  //   path: '/resetPassword',
  //   isIndex: false,
  //   isCaseSensitive: false,
  //   isDisabled: false,
  //   element: <ResetPassword />,
  // },
  {
    path: '*',
    isIndex: false,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Page404 />,
  },
];
