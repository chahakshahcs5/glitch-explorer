import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddelware from "redux-saga";
import rootReducer from "../rootReducer";
import rootSaga from "../rootSaga";

const sagaMiddleware = createSagaMiddelware();

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
