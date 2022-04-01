import { Project } from "../../containers/Projects/interfaces";
import { Collection } from "../../containers/Collections/interfaces";
import { Team } from "../../containers/Teams/interfaces";

export interface ProjectCardProps {
  project: Project;
}

export interface CollectionCardProps {
  collection: Collection;
}
export interface TeamCardProps {
  team: Team;
}
