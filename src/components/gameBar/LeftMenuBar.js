import React from "react";
import "./LeftMenuBar.less";
import { HomeFilled, CloudUploadOutlined } from "@ant-design/icons";

const leftMenuItem = [
  {
    name: "家",
    value: "home",
    path: "/home",
    icon: <HomeFilled twoToneColor="#eb2f96" />
  },
  {
    name: "外出",
    value: "out",
    path: "/out",
    icon: <CloudUploadOutlined twoToneColor="#eee" />
  }
];

const LeftMenuBar = (props) => {
  return (
    <div className="leftMenu" style={{ background: "#fff" }}>
      {leftMenuItem.map((item,index) => {
        console.log(item);
        return (
          <div key={ index }>
            {item.icon}
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default LeftMenuBar;
