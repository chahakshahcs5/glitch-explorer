import { ActionType } from "./actionType";
import {
  FetchTeamsAction,
  Message,
  setCurrentTeamsAction,
  setNextPageAction,
  setPageAction,
  Team,
  MessageAction,
  LoadingAction,
  TeamsAction,
} from "./interfaces";

export const setMessage = (values: Message): MessageAction => {
  return {
    type: ActionType.SET_MESSAGE,
    message: values,
  };
};

export const setLoading = (values: boolean): LoadingAction => {
  return {
    type: ActionType.SET_LOADING,
    loading: values,
  };
};

export const setTeams = (values: Team[]): TeamsAction => {
  return {
    type: ActionType.SET_TEAMS,
    allTeams: values,
  };
};

export const fetchTeams = (values?: string): FetchTeamsAction => {
  return {
    type: ActionType.FETCH_TEAMS,
    nextPage: values,
  };
};

export const setPage = (values: number): setPageAction => {
  return {
    type: ActionType.SET_PAGE,
    page: values,
  };
};

export const setNextPage = (values: string): setNextPageAction => {
  return {
    type: ActionType.SET_NEXT_PAGE,
    nextPage: values,
  };
};

export const setCurrentTeams = (values: Team[]): setCurrentTeamsAction => {
  return {
    type: ActionType.SET_CURRENT_TEAMS,
    currentTeams: values,
  };
};
