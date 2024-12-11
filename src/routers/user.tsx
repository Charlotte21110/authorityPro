import { RouteConfig } from 'react-router-config';
import React, { JSX } from 'react'
import { Navigate } from 'react-router'
import Blank from '@/layouts/Blank'
import { withAsync } from '@/components/Async';


const routes: RouteConfig[] = [
  {
    authCode: '01',
    component: Blank,
    path: '/user',
    menuTitle: '用户管理',
    routes: [
      {
        path: '/',
        component(): JSX.Element {
          return <Navigate to="/admin/user/list" />
        },
        exact: true,
      },
      {
        authCode: '01:01',
        path: '/list',
        component(): JSX.Element {
          return <Navigate to="/admin/user/list/OneClub" />
        },
        menuTitle: '用户管理',
        exact: true,
      },
      {
        authCode: '01:02',
        path: '/list/:page',
        component: withAsync(() => import(/* webpackChunkName: "Home" */ '@/containers/User/List')),
        menuTitle: '用户管理',
        hiddenInMenu: true,
        exact: true,
      }
    ]
  }
];
export default routes;