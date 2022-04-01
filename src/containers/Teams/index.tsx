import { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Backdrop, Button, CircularProgress } from "@mui/material";

import { AppState } from "../../rootReducer";
import { Action, Message, AppProps, Team } from "./interfaces";
import { setMessage, fetchTeams, setCurrentTeams, setPage } from "./actions";
import TeamCard from "../../components/Card/TeamCard";

// const API = "https://api.glitch.com/v1/teams/?limit=100";

const Teams = (props: AppProps) => {
  useEffect(() => {
    props.fetchTeams();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickNext = () => {
    let shouldFetchTeams = false;
    props.currentTeams.forEach((team) => {
      if (team.createdAt === props.nextPage.split("lastOrderValue=")[1]) {
        shouldFetchTeams = true;
      }
    });
    if (shouldFetchTeams) {
      props.fetchTeams(props.nextPage);
    } else {
      props.setCurrentTeams(
        props.allTeams.slice((props.page + 1) * 10, (props.page + 2) * 10)
      );
      props.setPage(props.page + 1);
    }
  };

  return (
    <div>
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
          {props.currentTeams.map((team) => (
            <TeamCard key={team.id} team={team} />
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
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    allTeams: state.teams.allTeams,
    currentTeams: state.teams.currentTeams,
    nextPage: state.teams.nextPage,
    page: state.teams.page,
    loading: state.teams.loading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    setMessage: (values: Message) => {
      dispatch(setMessage(values));
    },
    fetchTeams: (values?: string) => {
      dispatch(fetchTeams(values));
    },
    setCurrentTeams: (values: Team[]) => {
      dispatch(setCurrentTeams(values));
    },
    setPage: (values: number) => {
      dispatch(setPage(values));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
