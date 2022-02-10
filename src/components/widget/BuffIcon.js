import React from 'react';
import { Tooltip } from "antd";
import { HomeFilled } from '@ant-design/icons';
import { connect } from 'react-redux';

const buffList = [
 {
  icon: <HomeFilled twoToneColor="#eb2f96" />,
  desp: '测试buff',
 },
];

const BuffIcon = (props) => {
  const {playerBuff} = props
  console.log('buffIcon', props);
  return (
    <div>
      {buffList.map((item, index) => {
        return (
         playerBuff[index] && (
          <div key={index} style={{ cursor: 'pointer' }}>
           <Tooltip color="#2db7f5" title={item.desp}>
            {item.icon}
           </Tooltip>
          </div>
         )
        );
      })}
    </div>
  );
}

const MapStateToProps = (state) => {
 console.log(state);
 return {
  playerBuff: state.playerStatus.playerBuff,
 };
};

// const MapDispatchToProps = (dispatch) => {
//  return {
//   setUserName: (userName) => dispatch({ type: 'SET_USERNAME', userName }),
//  };
// };
export default connect(MapStateToProps)(BuffIcon);