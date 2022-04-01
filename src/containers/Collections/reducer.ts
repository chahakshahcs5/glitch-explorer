import { ActionType } from "./actionType";

import { InitialState, Action } from "./interfaces";

// initial state for reducer

const defaultState: InitialState = {
  message: {
    message: "",
    status: "",
  },
  loading: false,
  allCollections: [],
  nextPage: "",
  currentCollections: [],
  page: 1,
};

// reducer logic

const collectionsReducer = (
  state = defaultState,
  action: Action
): InitialState => {
  switch (action.type) {
    case ActionType.SET_MESSAGE:
      return { ...state, message: action.message };
    case ActionType.SET_LOADING:
      return { ...state, loading: action.loading };
    case ActionType.SET_COLLECTIONS:
      return { ...state, allCollections: action.allCollections };
    case ActionType.SET_CURRENT_COLLECTIONS:
      return { ...state, currentCollections: action.currentCollections };
    case ActionType.SET_NEXT_PAGE:
      return { ...state, nextPage: action.nextPage };
    case ActionType.SET_PAGE:
      return { ...state, page: action.page };
    default:
      return state;
  }
};

export default collectionsReducer;
