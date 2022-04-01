import { call, put, takeLatest } from "redux-saga/effects";
import {
  setMessage,
  setLoading,
  setCollections,
  setNextPage,
  setCurrentCollections,
  setPage,
} from "./actions";
import { fetchCollectionsApi } from "./api";
import { ActionType } from "./actionType";
import { FetchCollectionsAction } from "./interfaces";

function* fetchCollectionsSaga(action: FetchCollectionsAction) {
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchCollectionsApi, action.nextPage);
    yield put(setCollections(data.items));
    yield put(setCurrentCollections(data.items.slice(0, 10)));
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
        message: `Error getting collections`,
        status: "error",
      })
    );
    yield put(setLoading(false));
    console.log(error);
  }
}

function* collectionsSaga() {
  yield takeLatest(ActionType.FETCH_COLLECTIONS, fetchCollectionsSaga);
}

export default collectionsSaga;
