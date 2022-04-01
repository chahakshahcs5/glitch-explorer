import { ActionType } from "./actionType";

import { InitialState, Action } from "./interfaces";

// initial state for reducer

const defaultState: InitialState = {
  message: {
    message: "",
    status: "",
  },
  loading: false,
  allTeams: [],
  nextPage: "",
  currentTeams: [],
  page: 1,
};

// reducer logic

const teamsReducer = (state = defaultState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.SET_MESSAGE:
      return { ...state, message: action.message };
    case ActionType.SET_LOADING:
      return { ...state, loading: action.loading };
    case ActionType.SET_TEAMS:
      return { ...state, allTeams: action.allTeams };
    case ActionType.SET_CURRENT_TEAMS:
      return { ...state, currentTeams: action.currentTeams };
    case ActionType.SET_NEXT_PAGE:
      return { ...state, nextPage: action.nextPage };
    case ActionType.SET_PAGE:
      return { ...state, page: action.page };
    default:
      return state;
  }
};

export default teamsReducer;
