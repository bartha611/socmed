import { Comment } from "./comment.types";

export interface PostResponse {
  id: number;
  post: string;
  userid: string;
  profile_photo: string;
  createdAt: Date;
  updatedAt: Date;
  comments: Comment[] | null;
}

export interface Post {
  id: number;
  post: string;
  userid: string;
  createdat: Date;
  updatedat: Date;
}

export interface NewPost {
  post: string;
}
