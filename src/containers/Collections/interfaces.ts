import { ActionType } from "./actionType";

// define interfaces

// props

export interface CollectionsProps {
  setMessage(values: Message): void;
  fetchCollections(values?: string): void;
  allCollections: Collection[];
  setCurrentCollections(values: Collection[]): void;
  setNextPage(values: string): void;
  setPage(values: number): void;
  currentCollections: Collection[];
  nextPage: string;
  page: number;
  loading: boolean;
}

export interface Message {
  message: string;
  status: string;
}

export interface InitialState {
  message: Message;
  loading: boolean;
  allCollections: Collection[];
  currentCollections: Collection[];
  nextPage: string;
  page: number;
}

// api response

export interface Collections {
  items: Collection[];
  limit: number;
  orderKey: string;
  orderDirection: string;
  lastOrderValue: string;
  hasMore: boolean;
  nextPage: string;
}

export interface Collection {
  fullUrl: string;
  id: number;
  name: string;
  url: string;
  coverColor: string;
  hasCoverImage: boolean;
  description: string;
  avatarUrl: string;
  avatarThumbnailUrl: any;
  userId: number;
  teamId: number;
  featuredProjectId?: string;
  createdAt: string;
  updatedAt: string;
  isMyStuff: boolean;
  private: boolean;
  maxProjects: any;
  mustBeProjectOwner: boolean;
  isProtectedCollection: boolean;
  team: any;
  user: User;
}

export interface User {
  isSupport: boolean;
  isInfrastructureUser: boolean;
  id: number;
  login: string;
}

// actions

export interface MessageAction {
  type: ActionType.SET_MESSAGE;
  message: Message;
}

export interface LoadingAction {
  type: ActionType.SET_LOADING;
  loading: boolean;
}

export interface CollectionsAction {
  type: ActionType.SET_COLLECTIONS;
  allCollections: Collection[];
}

export interface FetchCollectionsAction {
  type: ActionType.FETCH_COLLECTIONS;
  nextPage?: string;
}

export interface setPageAction {
  type: ActionType.SET_PAGE;
  page: number;
}

export interface setNextPageAction {
  type: ActionType.SET_NEXT_PAGE;
  nextPage: string;
}

export interface setCurrentCollectionsAction {
  type: ActionType.SET_CURRENT_COLLECTIONS;
  currentCollections: Collection[];
}

export type Action =
  | MessageAction
  | LoadingAction
  | CollectionsAction
  | FetchCollectionsAction
  | setPageAction
  | setNextPageAction
  | setCurrentCollectionsAction;
