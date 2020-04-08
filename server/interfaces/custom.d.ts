declare namespace Express {
  export interface Request {
    userId?: string;
  }
}

declare namespace NodeJS {
  export interface ProcessEnv {
    JWT_TOKEN: string;
    DATABASE_URI: string;
    PORT: string;
  }
}
