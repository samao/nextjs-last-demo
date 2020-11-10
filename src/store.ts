/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2020-11-10 11:52:01
 * @Last Modified by: idzeir
 * @Last Modified time: 2020-11-10 16:47:52
 */
import { createStore, applyMiddleware } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import createSagaMiddleware, { Task } from "redux-saga";
import rootSaga from "./saga";
import reducers from "./reducers";
import { fromJS, Map } from "immutable";

export interface SagaStore {
  sagaTask?: Task;
}

export const makeStore = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));

  // 3: Run your sagas on server
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper(makeStore, {
  serializeState(state: Map<string, any>) {
    return state.toJS();
  },
  deserializeState(state) {
    return fromJS(state);
  },
});
