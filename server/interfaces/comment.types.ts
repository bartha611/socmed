export interface CommentResponse {
  id: number;
  comment: string;
  userid: string;
  postid: number;
  createdat: Date;
  updatedat: Date;
}
export interface Comment {
  id: number;
  comment: string;
  postid: number;
  userid: string;
  username: string;
  profile_photo: string;
  createdat: Date;
  updatedat: Date;
}

export interface NewComment {
  postId: number;
  comment: string;
}
