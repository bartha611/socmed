import { User } from "./user.types";

export interface Comment {
  id: number;
  user: User;
  date: Date;
  comment: string;
  likes: number;
}

export interface NewComment {
  postId: number;
  comment: string;
}
