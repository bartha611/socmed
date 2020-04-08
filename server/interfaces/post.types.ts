import { Comment } from "./comment.types";
import { User } from "./user.types";

export interface Post {
  id: number;
  post: string;
  likes: number;
  user: User;
  createdAt: Date;
  comments: Comment[];
}

export interface NewPost {
  post: string;
}
