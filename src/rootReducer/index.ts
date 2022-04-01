import { combineReducers } from "redux";
import collectionsReducer from "../containers/Collections/reducer";
import projectsReducer from "../containers/Projects/reducer";
import teamsReducer from "../containers/Teams/reducer";

const rootReducer = combineReducers({
  projects: projectsReducer,
  collections: collectionsReducer,
  teams: teamsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
