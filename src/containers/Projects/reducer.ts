import { ActionType } from "./actionType";

import { InitialState, Action } from "./interfaces";

// initial state for reducer

const defaultState: InitialState = {
  message: {
    message: "",
    status: "",
  },
  loading: false,
  allProjects: [],
  nextPage: "",
  currentProjects: [],
  page: 0,
};

// reducer logic

const projectsReducer = (
  state = defaultState,
  action: Action
): InitialState => {
  switch (action.type) {
    case ActionType.SET_MESSAGE:
      return { ...state, message: action.message };
    case ActionType.SET_LOADING:
      return { ...state, loading: action.loading };
    case ActionType.SET_PROJECTS:
      return { ...state, allProjects: action.allProjects };
    case ActionType.SET_CURRENT_PROJECT:
      return { ...state, currentProjects: action.currentProjects };
    case ActionType.SET_NEXT_PAGE:
      return { ...state, nextPage: action.nextPage };
    case ActionType.SET_PAGE:
      return { ...state, page: action.page };
    default:
      return state;
  }
};

export default projectsReducer;
