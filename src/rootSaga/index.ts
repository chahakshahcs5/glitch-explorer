import { all } from "redux-saga/effects";
import projectsSaga from "../containers/Projects/saga";
import collectionsSaga from "../containers/Collections/saga";
import teamsSaga from "../containers/Teams/saga";

export default function* rootSaga() {
  yield all([projectsSaga(), collectionsSaga(), teamsSaga()]);
}
