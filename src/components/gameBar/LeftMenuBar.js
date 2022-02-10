import React from "react";
import { HomeFilled, CloudUploadOutlined } from "@ant-design/icons";
import { useHistory } from 'react-router-dom';
import './LeftMenuBar.css';

const leftMenuItem = [
 {
  name: '家',
  value: 'home',
  path: '/index/',
  icon: <HomeFilled twoToneColor="#eb2f96" />,
 },
 {
  name: '外出',
  value: 'out',
  path: '/index/outside',
  icon: <CloudUploadOutlined twoToneColor="#eee" />,
 },
];

const LeftMenuBar = (props) => {
  let history = useHistory();
  const clickMenu = item => {
    console.log(item);
    console.log(props);
    console.log(this);
    history.push(item.path);
  }
  return (
    <div className="leftMenu" style={{ background: "#fff" }}>
      {leftMenuItem.map((item,index) => {
        console.log(item);
        return (
          <div className="leftMenuItem" key={ index } onClick={()=>clickMenu(item)}>
            {item.icon}
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default LeftMenuBar;
