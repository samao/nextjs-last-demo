/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2020-11-10 11:56:34
 * @Last Modified by: idzeir
 * @Last Modified time: 2020-11-10 16:58:43
 */
import { call, put, take } from "redux-saga/effects";
import Actions from "./actions";

export default function* rootSaga() {
  yield call(console.log, "Root init");
  yield take(Actions.CHANGE_NAME);
  yield put({ type: Actions.NAME_UPDATE, payload: "cccc" });
}
