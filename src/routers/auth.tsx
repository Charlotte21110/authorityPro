import { RouteConfig } from 'react-router-config';
import React, { JSX } from 'react'
import { Navigate } from 'react-router'
import Blank from '@/layouts/Blank'



const routes: RouteConfig[] = [
  {
    authCode: '02',
    component: Blank,
    path: '/auth',
    routes: [
      {
        path: '/',
        component(): JSX.Element {
          return <Navigate to="/admin/auth/role" />
        },
        exact: true,
      },
      {
        authCode: '02:01',
        path: '/role',
        component(): JSX.Element {
          return <Navigate to="/admin/auth/role/authority" />
        },
        menuTitle: '角色管理',
        exact: true,
      }
    ]
  }
];
export default routes;