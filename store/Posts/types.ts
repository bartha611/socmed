import { userInfo } from "../Users/types";
import { Comment } from "../Comments/types";

export const LOAD_POST = "LOAD_POST";
export const CREATE_POST = "CREATE_POST";
export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const UPDATE_POST = "UPDATE_POST";
export const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST";
export const READ_POST = "READ_POST";
export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const ERROR_POST = "ERROR_POST";

export interface Post {
  id: number;
  user: userInfo;
  message: string;
  date: Date;
  likes: number;
  comments: Comment[];
}

export interface newPost {
  message: string;
}

export interface postState {
  loading: boolean;
  posts: Post[];
  error: boolean;
}

interface createPost {
  type: typeof CREATE_POST;
  payload: newPost;
}

interface updatePost {
  type: typeof UPDATE_POST;
}

interface deletePost {
  type: typeof DELETE_POST;
  meta: {
    id: number;
  };
}

interface readPosts {
  type: typeof READ_POST;
  payload: Post[];
}

interface loadPost {
  type: typeof LOAD_POST;
}
interface errorPost {
  type: typeof ERROR_POST;
}

export type postActionTypes =
  | createPost
  | deletePost
  | loadPost
  | readPosts
  | errorPost;
