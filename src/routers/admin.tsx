import { RouteConfig } from 'react-router-config';
import React, { JSX } from 'react'
import { Navigate } from 'react-router'


const routes: RouteConfig[] = [
  {
    path: '/',
    component(): JSX.Element {
      return <Navigate to="/admin/user" />
    },
    exact: true,
  },
  {
    path: '/*',
    component: () => <div>404</div>,
  },
];
export default routes;