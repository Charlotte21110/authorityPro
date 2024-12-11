import React, { useState } from 'react';
import { Typography, Button } from 'antd';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ProLayout from '@ant-design/pro-layout';

import routes from '@/routers';


import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}


const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // 这里肯定要换成路由读取
  const items: MenuItem[] = [
    getItem('用户管理', '/admin/user', <PieChartOutlined />, [
      getItem('用户管理', '/admin/user/list'),
    ]),
    getItem('权限管理', '/admin/auth', <UserOutlined />, [
      getItem('角色管理', '/admin/auth/role'),
      getItem('资源管理', '/admin/auth/resource'),
    ]),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];

  const handleMenuClick = ({ key } : { key: string}) => {
    navigate(key);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleMenuClick}/>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* Bill is a cat. */}
            <Routes>
              {routes.map((route) => {
                if (!route.path) return null;
                const Component = route.component as React.ComponentType;  // 添加类型断言
                return (
                  <Route
                    key={Array.isArray(route.path) ? route.path[0] : route.path}
                    path={Array.isArray(route.path) ? route.path[0] : route.path}
                    element={Component && <Component />}  // 添加存在性检查
                  />
                )
              })}
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>

  );
};
// 包装 App 组件使其能够使用路由
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;