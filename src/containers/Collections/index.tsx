import { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Backdrop, Button, CircularProgress } from "@mui/material";

import { AppState } from "../../rootReducer";
import { Action, Message, CollectionsProps } from "./interfaces";
import { setMessage, fetchCollections } from "./actions";
import CollectionCard from "../../components/Card/CollectionCard";

// const API = "https://api.glitch.com/v1/projects/?limit=100";

const Collections = (props: CollectionsProps) => {
  useEffect(() => {
    props.fetchCollections();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickNext = () => {
    let shouldFetchCollections = false;
    props.currentCollections.forEach((collection) => {
      if (collection.createdAt === props.nextPage.split("lastOrderValue=")[1]) {
        shouldFetchCollections = true;
      }
    });
    if (shouldFetchCollections) {
      props.fetchCollections(props.nextPage);
    } else {
      props.setCurrentCollections(
        props.allCollections.slice((props.page + 1) * 10, (props.page + 2) * 10)
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
        {props.currentCollections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
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
    allCollections: state.collections.allCollections,
    loading: state.collections.loading,
    currentCollections: state.collections.currentCollections,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    setMessage: (values: Message) => {
      dispatch(setMessage(values));
    },
    fetchCollections: (values?: string) => {
      dispatch(fetchCollections(values));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
