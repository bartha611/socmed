export interface PostLikes {
  id: number;
  userid: string;
  postid: number;
}

export interface PostLikesResponse {
  id: number;
  userid: string;
  username: string;
  profile_photo: string | null;
  postid: number;
}

export interface CommentLikes {
  id: number;
  userid: string;
  commentid: number;
}

export interface CommentLikesResponse {
  id: number;
  userid: string;
  username: string;
  profile_photo: string | null;
  commentid: number;
}
