import admin from './admin';
export const routes = [
  {
    path: '/',
    component: () => <div>Hello World</div>, // 里面替换成组件
  },
  ...admin,
  {
    path: '/*',
    component: () => <div>404</div>,
  },
];
export default routes; // 在里面新增拦截器