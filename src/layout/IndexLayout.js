import React from "react";
import { Layout, Menu } from "antd";
import PlayerStatus from "../components/gameBar/PlayerStatus";
import LeftMenuBar from "../components/gameBar/LeftMenuBar";
const { SubMenu } = Menu;
const { Sider, Header, Content, Footer } = Layout;

const IndexLayout = (props) => {
  return (
   <Layout>
    <Sider width="15%" style={{ height: '100vh' }}>
     <PlayerStatus />
     <LeftMenuBar />
    </Sider>
    <Layout>
     <Content>{props.children}</Content>
    </Layout>
   </Layout>
  );
};

export default IndexLayout;
