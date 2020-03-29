export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_UPDATE = "USER_UPDATE";
export const USER_CREATE = "USER_CREATE";
export const USER_DELETE = "USER_DELETE";

export interface userInfo {
  username: string;
  profilePhoto: string;
}

export interface userState {
  loading: boolean;
  user: userInfo | null;
  error: boolean;
}

interface userUpdate {
  type: typeof USER_UPDATE;
  payload: userInfo;
}

interface userLogin {
  type: typeof USER_LOGIN;
  payload: userInfo;
}

interface userLogout {
  type: typeof USER_LOGOUT;
}
interface userDelete {
  type: typeof USER_DELETE;
  meta: {
    id: number;
  };
}

export type userActionType = userUpdate | userLogin | userLogout;
