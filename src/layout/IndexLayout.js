import React from "react";
import { Layout, Menu } from "antd";
import PlayerStatus from "../components/gameBar/PlayerStatus";
import LeftMenuBar from "../components/gameBar/LeftMenuBar";
const { SubMenu } = Menu;
const { Sider, Header, Content, Footer } = Layout;

const IndexLayout = (props) => {
  return (
    <Layout>
      <Layout>
        <Sider style={{ height: 300 }}>
          <PlayerStatus />
          <LeftMenuBar />
        </Sider>
      </Layout>
      <Layout style={{ display: "block" }}>{props.children}</Layout>
    </Layout>
  );
};

export default IndexLayout;
