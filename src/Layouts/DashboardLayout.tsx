import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { HeaderDashboard } from './Headers';
import { SidebarDashboard } from './Sidebars';
import LayoutProvider from './Context';

const { Content } = Layout;

function InnerLayout() {
  return (
    <Layout>
      <HeaderDashboard />
      <Content className="p-5">
        <Outlet />
      </Content>
    </Layout>
  );
}

function DashboardLayout() {
  return (
    <LayoutProvider>
      <SidebarDashboard />
      <InnerLayout />
    </LayoutProvider>
  );
}

export default DashboardLayout;
