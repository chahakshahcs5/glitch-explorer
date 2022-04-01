import { ActionType } from "./actionType";
import {
  Collection,
  FetchCollectionsAction,
  Message,
  setCurrentCollectionsAction,
  setNextPageAction,
  setPageAction,
  MessageAction,
  LoadingAction,
  CollectionsAction,
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

export const setCollections = (values: Collection[]): CollectionsAction => {
  return {
    type: ActionType.SET_COLLECTIONS,
    allCollections: values,
  };
};

export const fetchCollections = (values?: string): FetchCollectionsAction => {
  return {
    type: ActionType.FETCH_COLLECTIONS,
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

export const setCurrentCollections = (
  values: Collection[]
): setCurrentCollectionsAction => {
  return {
    type: ActionType.SET_CURRENT_COLLECTIONS,
    currentCollections: values,
  };
};
