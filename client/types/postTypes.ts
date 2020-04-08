import { Action } from "redux";
import { userInfo } from "./userTypes";
import { Comment } from "./commentTypes";

export const LOAD_POST = "LOAD_POST";
export const CREATE_POST = "CREATE_POST";
export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const UPDATE_POST = "UPDATE_POST";
export const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST";
export const READ_POST = "READ_POST";
export const READ_POST_REQUEST = "READ_POST_REQUEST";
export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const ERROR_POST = "ERROR_POST";

// redux state types
export interface Post {
  id: number;
  user: userInfo;
  message: string;
  date: Date;
  likes: number;
  comments: Comment[];
}

export interface NewPost {
  message: string;
}

export interface PostState {
  loading: boolean;
  posts: Post[];
  error: boolean;
}

// redux action types
interface CreatePost {
  type: typeof CREATE_POST;
  payload: Post;
}

interface UpdatePost {
  type: typeof UPDATE_POST;
}

interface DeletePost {
  type: typeof DELETE_POST;
  meta: {
    id: number;
  };
}

interface ReadPosts {
  type: typeof READ_POST;
  payload: Post[];
}

interface LoadPost {
  type: typeof LOAD_POST;
}
interface ErrorPost {
  type: typeof ERROR_POST;
}

export type PostActionTypes =
  | CreatePost
  | DeletePost
  | LoadPost
  | ReadPosts
  | ErrorPost;

// redux sagas types
export interface CreatePostAction extends Action {
  type: typeof CREATE_POST_REQUEST;
  payload: NewPost;
}

export interface ReadPostAction extends Action {
  type: typeof READ_POST_REQUEST;
}

export interface UpdatePostAction extends Action {
  type: typeof UPDATE_POST_REQUEST;
  payload: Post;
}

export interface DeletePostAction extends Action {
  type: typeof DELETE_POST_REQUEST;
  payload: Post;
}
