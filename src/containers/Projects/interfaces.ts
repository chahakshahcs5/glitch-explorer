import { ActionType } from "./actionType";

// define interfaces

// props

export interface ProjectsProps {
  setMessage(values: Message): void;
  fetchProjects(values?: string): void;
  setCurrentProjects(values: Project[]): void;
  setNextPage(values: string): void;
  setPage(values: number): void;
  allProjects: Project[];
  currentProjects: Project[];
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
  allProjects: Project[];
  currentProjects: Project[];
  nextPage: string;
  page: number;
}

// api response

export interface Projects {
  items: Project[];
  limit: number;
  orderKey: string;
  orderDirection: string;
  lastOrderValue: string;
  hasMore: boolean;
  nextPage: string;
}

export interface Project {
  private: boolean;
  id: string;
  description: string;
  domain: string;
  baseId: any;
  gitRepoUrl: any;
  privacy: string;
  suspendedReason?: string;
  avatarUpdatedAt: string;
  showAsGlitchTeam: boolean;
  isEmbedOnly: boolean;
  remixChain: any[];
  notSafeForKids: boolean;
  createdAt: string;
  updatedAt: string;
  appType?: string;
  edgeBadgeMode: string;
  permissions: Permission[];
  features: Feature[];
  teamIds: number[];
  allFeatureNames: string[];
}

export interface Permission {
  userId: number;
  accessLevel: number;
}

export interface Feature {
  id: number;
  name: string;
  data: any;
  expiresAt: string;
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

export interface ProjectsAction {
  type: ActionType.SET_PROJECTS;
  allProjects: Project[];
}

export interface FetchProjectsAction {
  type: ActionType.FETCH_PROJECTS;
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

export interface setCurrentProjectsAction {
  type: ActionType.SET_CURRENT_PROJECT;
  currentProjects: Project[];
}

export type Action =
  | MessageAction
  | LoadingAction
  | ProjectsAction
  | FetchProjectsAction
  | setPageAction
  | setNextPageAction
  | setCurrentProjectsAction;
