import React from "react";
import { connect } from "react-redux";
import { Progress } from "antd";
import "./PlayerStatus.css";
const initValue = {
  playerCurHp: 10,
  playerMaxHp: 20,
  playerCurSp: 2,
  playerMaxSp: 20
};

const PlayerStatus = (props) => {
  const { playerCurHp, playerMaxHp, playerCurSp, playerMaxSp } = props;
  return (
    <div className="playerInfoBlock">
      <div className="playerIcon">
        <img src="" alt="用户头像" />
      </div>
      <div className="playerStatus">
        <div className="playerStatus_hp playerStatusBar">
          <Progress
            className="playerStatusBar_main"
            strokeColor="red"
            percent={(playerCurHp / playerMaxHp) * 100}
            showInfo={false}
          />
          {playerCurHp}/{playerMaxHp}
        </div>
        <div className="playerStatus_sp playerStatusBar">
          <Progress
            className="playerStatusBar_main"
            strokeColor="aqua"
            showInfo={false}
            percent={(playerCurSp / playerMaxSp) * 100}
          />
          {playerCurSp}/{playerMaxSp}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    playerCurHp: state.playerStatus.playerCurHp,
    playerMaxHp: state.playerStatus.playerMaxHp,
    playerCurSp: state.playerStatus.playerCurSp,
    playerMaxSp: state.playerStatus.playerMaxSp
  };
};
export default connect(mapStateToProps)(PlayerStatus);
