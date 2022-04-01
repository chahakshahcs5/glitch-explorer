import { ActionType } from "./actionType";

// define interfaces

// props

export interface AppProps {
  setMessage(values: Message): void;
  fetchTeams(values?: string): void;
  setCurrentTeams(values: Team[]): void;
  setPage(values: number): void;
  allTeams: Team[];
  currentTeams: Team[];
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
  allTeams: Team[];
  currentTeams: Team[];
  nextPage: string;
  page: number;
}

// api response

export interface Teams {
  items: Team[];
  limit: number;
  orderKey: string;
  orderDirection: string;
  lastOrderValue: string;
  hasMore: boolean;
  nextPage: string;
}

export interface Team {
  id: number;
  name: string;
  url: string;
  hasAvatarImage: boolean;
  coverColor: string;
  description: string;
  backgroundColor: string;
  hasCoverImage: boolean;
  location?: any;
  isVerified: boolean;
  whitelistedDomain?: any;
  featuredProjectId?: any;
  createdAt: string;
  updatedAt: string;
  teamPermissions: TeamPermission[];
  features: any[];
}

export interface TeamPermission {
  userId: number;
  accessLevel: number;
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

export interface TeamsAction {
  type: ActionType.SET_TEAMS;
  allTeams: Team[];
}

export interface FetchTeamsAction {
  type: ActionType.FETCH_TEAMS;
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

export interface setCurrentTeamsAction {
  type: ActionType.SET_CURRENT_TEAMS;
  currentTeams: Team[];
}

export type Action =
  | MessageAction
  | LoadingAction
  | TeamsAction
  | FetchTeamsAction
  | setPageAction
  | setNextPageAction
  | setCurrentTeamsAction;
