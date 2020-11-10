/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2020-11-10 12:01:49
 * @Last Modified by: idzeir
 * @Last Modified time: 2020-11-10 17:00:12
 */

import { fromJS } from "immutable";
import { combineReducers } from "redux-immutable";
import { handleActions } from "redux-actions";
import Actions from "./actions";

export default combineReducers({
  home: handleActions(
    {
      [Actions.INIT]: (state) => state.merge({ name: "bbb" }),
      [Actions.NAME_UPDATE]: (state, action) =>
        state.set("name", action.payload),
    },
    fromJS({ name: "aaa" })
  ),
  about: handleActions(
    {
      [Actions.TICKER]: (state, action) => state.set("tick", action.payload),
    },
    fromJS({ tick: 0 })
  ),
});
