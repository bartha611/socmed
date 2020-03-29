import { userInfo } from "../Users/types";
import { Action } from "redux";

// types for redux types
export const CREATE_COMMENT = "CREATE_COMMENT";
export const CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST";
export const READ_COMMENT = "READ_COMMENT";
export const READ_COMMENT_REQUEST = "READ_COMMENT_REQUEST";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const UPDATE_COMMENT_REQUEST = "UPDATE_COMMENT_REQUEST";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const DELETE_COMMENT_REQUEST = "DELETE_COMMENT_REQUEST";
export const ERROR_COMMENT = "ERROR_COMMENT";

// types for redux actions
export interface Comment {
  id: number;
  user: userInfo;
  date: Date;
  message: string;
  likes: number;
}

export interface newComment {
  message: string;
}

// types for redux saga actions
export interface createCommentAction extends Action {
  type: typeof CREATE_COMMENT_REQUEST;
  payload: newComment;
}

export interface updateCommentAction extends Action {
  type: typeof UPDATE_COMMENT_REQUEST;
  payload: Comment;
}

export interface deleteCommentAction extends Action {
  type: typeof DELETE_COMMENT_REQUEST;
  meta: {
    id: number;
  };
}
