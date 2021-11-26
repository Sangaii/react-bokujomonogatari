import React from "react";
import { connect } from "react-redux";

//debuff主角头像下方的buff方块，悬浮会显示当前buff情况
const PlayerBuffBar = (props) => {
  return;
};

const mapStateToProps = (state) => {
  return {
    state
  };
};
const mapDispatchToProps = (dispatch) => {};
export default connect(mapStateToProps, mapDispatchToProps)(PlayerBuffBar);
