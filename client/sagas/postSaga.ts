import axios, { AxiosResponse } from "axios";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../types/postTypes";

function* createPost(action: types.createPostAction) {
  const { payload } = action;
  try {
    const response: AxiosResponse<types.Post> = yield axios.post("api/post", {
      payload
    });
    yield put({ type: types.CREATE_POST, payload: response.data });
  } catch (err) {
    yield put({ type: types.ERROR_POST });
  }
}

function* readPost(action: types.readPostAction) {
  try {
    const response: AxiosResponse<types.Post[]> = yield axios.get("api/post");
    yield put({ type: types.READ_POST_REQUEST, payload: response.data });
  } catch (err) {
    yield put({ type: types.ERROR_POST });
  }
}

function* updatePost(action: types.updatePostAction) {
  const { payload } = action;
  try {
    const response: AxiosResponse<types.Post> = yield axios.put("api/post", {
      payload
    });
    yield put({ type: types.UPDATE_POST, payload: response.data });
  } catch (err) {
    yield put({ type: types.ERROR_POST });
  }
}

function* deletePost(action: types.deletePostAction) {
  const { payload } = action;
  try {
    const response: AxiosResponse<{}> = yield axios.delete(
      `api/post/${payload.id}`
    );
    yield put({ type: types.DELETE_POST, meta: { id: payload.id } });
  } catch (err) {
    yield put({ type: types.ERROR_POST });
  }
}

export default function* postSaga() {
  yield takeEvery(types.CREATE_POST_REQUEST, createPost);
  yield takeEvery(types.READ_POST_REQUEST, readPost);
  yield takeEvery(types.UPDATE_POST_REQUEST, updatePost);
  yield takeEvery(types.DELETE_POST_REQUEST, deletePost);
}
