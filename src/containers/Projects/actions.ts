import { ActionType } from "./actionType";
import { FetchProjectsAction, Message, Project } from "./interfaces";
import {
  MessageAction,
  LoadingAction,
  ProjectsAction,
  setPageAction,
  setNextPageAction,
  setCurrentProjectsAction,
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

export const setProjects = (values: Project[]): ProjectsAction => {
  return {
    type: ActionType.SET_PROJECTS,
    allProjects: values,
  };
};

export const fetchProjects = (values?: string): FetchProjectsAction => {
  return {
    type: ActionType.FETCH_PROJECTS,
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

export const setCurrentProjects = (
  values: Project[]
): setCurrentProjectsAction => {
  return {
    type: ActionType.SET_CURRENT_PROJECT,
    currentProjects: values,
  };
};
