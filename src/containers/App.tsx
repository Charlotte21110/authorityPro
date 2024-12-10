import React from 'react';
import { Typography, Button } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>

      <div className="App">
        <div className="app-header">
          <Typography.Title level={2}>用户管理系统</Typography.Title>
        </div>
        <div className="app-content">
          <div className="sidebar">
            <Button type="link">仪表盘</Button>
            <Button type="link">用户管理</Button>
            <Button type="link">角色管理</Button>
            <Button type="link">权限设置</Button>
          </div>
          <div className="main-content">
            {/* 这里可以放置路由内容 */}
            <Typography.Text>欢迎使用管理系统</Typography.Text>
          </div>
        </div>
      </div>
    </Router>

  );
};

export default App;