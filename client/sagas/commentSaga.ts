import { put, takeEvery } from "redux-saga/effects";
import { Action } from "redux";
import axios, { AxiosResponse } from "axios";
import * as types from "../store/Comments/types";

function* createComment(action: types.createCommentAction) {
  try {
    const { payload } = action;
    const response: AxiosResponse<types.Comment> = yield axios.post(
      "api/comment",
      payload
    );
    yield put({ type: "CREATE_COMMENT", payload: response.data });
  } catch (err) {
    yield put({ type: types.ERROR_COMMENT });
  }
}

function* deleteComment(action: types.deleteCommentAction) {
  try {
    const { id } = action.meta;
    yield axios.delete(`api/comment/${id}`);
    yield put({ type: types.DELETE_COMMENT, meta: { id } });
  } catch (err) {
    yield put({ type: types.ERROR_COMMENT });
  }
}

function* updateComment(action: types.updateCommentAction) {
  try {
    const { payload } = action;
    const response: AxiosResponse<types.Comment> = yield axios.put(
      `api/comment/${payload.id}`,
      payload
    );
    yield put({ type: types.UPDATE_COMMENT, payload: response.data });
  } catch (err) {
    yield put({ type: types.ERROR_COMMENT });
  }
}

export default function* commentSaga() {
  yield takeEvery(types.CREATE_COMMENT_REQUEST, createComment);
  yield takeEvery(types.READ_COMMENT_REQUEST, readComment);
  yield takeEvery(types.UPDATE_COMMENT_REQUEST, updateComment);
  yield takeEvery(types.DELETE_COMMENT_REQUEST, deleteComment);
}
