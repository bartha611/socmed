import { Action } from "redux";
import axios, { AxiosResponse } from "axios";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../store/Posts/types";

interface createPostAction extends Action {
  type: typeof types.CREATE_POST_REQUEST;
  payload: types.newPost;
}

function* createPost(action: createPostAction) {
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
