import { call, put, takeLatest } from "redux-saga/effects";
import {
  setMessage,
  setLoading,
  setTeams,
  setCurrentTeams,
  setNextPage,
  setPage,
} from "./actions";
import { fetchTeamsApi } from "./api";
import { ActionType } from "./actionType";
import { FetchTeamsAction } from "./interfaces";

function* fetchTeamsSaga(action: FetchTeamsAction) {
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchTeamsApi, action.nextPage);
    yield put(setTeams(data.items));
    yield put(setCurrentTeams(data.items.slice(0, 10)));
    yield put(
      setNextPage(
        data.nextPage.replaceAll("%3A", ":").replaceAll("ASC", "DESC")
      )
    );
    yield put(setPage(0));
    yield put(setLoading(false));
  } catch (error) {
    yield put(
      setMessage({
        message: `Error getting teams`,
        status: "error",
      })
    );
    // yield put(loading(false));
    console.log(error);
  }
}

function* teamsSaga() {
  yield takeLatest(ActionType.FETCH_TEAMS, fetchTeamsSaga);
}

export default teamsSaga;
