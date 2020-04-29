declare namespace Express {
  export interface Request {
    userid: string;
    profile_photo: string;
    username: string;
  }
}

declare namespace NodeJS {
  export interface ProcessEnv {
    JWT_TOKEN: string;
    DATABASE_URI: string;
    PORT: string;
  }
}
