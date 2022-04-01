import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useEffect } from "react";
import { Backdrop, Button, CircularProgress } from "@mui/material";

import { AppState } from "../../rootReducer";
import { Action, Message, ProjectsProps, Project } from "./interfaces";
import {
  setMessage,
  fetchProjects,
  setCurrentProjects,
  setPage,
} from "./actions";
import ProjectCard from "../../components/Card/ProjectCard";
import "./project.modules.css";

// const API = "https://api.glitch.com/v1/projects/?limit=100";

const Projects = (props: ProjectsProps) => {
  useEffect(() => {
    props.fetchProjects();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickNext = () => {
    let shouldFetchProjects = false;
    props.currentProjects.forEach((project) => {
      if (project.createdAt === props.nextPage.split("lastOrderValue=")[1]) {
        shouldFetchProjects = true;
      }
    });
    if (shouldFetchProjects) {
      props.fetchProjects(props.nextPage);
    } else {
      props.setCurrentProjects(
        props.allProjects.slice((props.page + 1) * 10, (props.page + 2) * 10)
      );
      props.setPage(props.page + 1);
    }
  };

  return (
    <div>
      {props.loading && (
        <Backdrop
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={props.loading}
        >
          <CircularProgress />
        </Backdrop>
      )}
      <div className="container">
        {props.currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="buttons">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => console.log(props.page)}
          disabled={props.page === 0 ? true : false}
        >
          Prev
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleClickNext()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    allProjects: state.projects.allProjects,
    currentProjects: state.projects.currentProjects,
    nextPage: state.projects.nextPage,
    page: state.projects.page,
    loading: state.projects.loading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    setMessage: (values: Message) => {
      dispatch(setMessage(values));
    },
    fetchProjects: (values?: string) => {
      dispatch(fetchProjects(values));
    },
    setCurrentProjects: (values: Project[]) => {
      dispatch(setCurrentProjects(values));
    },
    setPage: (values: number) => {
      dispatch(setPage(values));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
