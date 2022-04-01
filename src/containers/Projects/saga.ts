import { call, put, takeLatest } from "redux-saga/effects";
import {
  setMessage,
  setLoading,
  setProjects,
  setPage,
  setNextPage,
  setCurrentProjects,
} from "./actions";
import { fetchProjectsApi } from "./api";
import { ActionType } from "./actionType";
import { FetchProjectsAction } from "./interfaces";

function* fetchProjectsSaga(action: FetchProjectsAction) {
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchProjectsApi, action.nextPage);
    yield put(setProjects(data.items));
    yield put(setCurrentProjects(data.items.slice(0, 10)));
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
        message: `Error getting projects`,
        status: "error",
      })
    );
    yield put(setLoading(false));
    console.log(error);
  }
}

function* projectsSaga() {
  yield takeLatest(ActionType.FETCH_PROJECTS, fetchProjectsSaga);
}

export default projectsSaga;
