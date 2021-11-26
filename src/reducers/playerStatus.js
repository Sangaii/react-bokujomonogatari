import { createStore, applyMiddleware } from "redux";
import { PLAYER_STATUS } from "../constants/index";

const initState = {
  userName: "",
  nickName: "小x",
  playerCurHp: 10,
  playerMaxHp: 100,
  playerCurSp: 20,
  playerMaxSp: 100
};
const handlers = {
  [PLAYER_STATUS.SET_CUR_HP]: (state, action) => {
    return { playerCurHp: action.playerCurHp };
  },
  [PLAYER_STATUS.SET_USERNAME]: (satte, action) => {
    return { userName: action.userName };
  },
  [PLAYER_STATUS.SET_MAX_HP]: (state, action) => {
    return { playerMaxHp: action.playerMaxHp };
  }
};
const playerStatus = (state = initState, action) => {
  let handler = handlers[action.type];
  if (!handler) return state;
  return { ...state, ...handler(state, action) };
};

export default playerStatus;
