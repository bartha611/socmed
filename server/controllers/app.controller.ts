import express from "express";
import * as bodyParser from "body-parser";

import PostController from "./post.controller";
import AuthController from "./auth.controller";
import CommentController from "./comment.controller";

export default class App {
  public app: express.Application;
  public PORT: number = parseInt(process.env.PORT) || 3000;
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }
  private middleware(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static(`../client/dist`));
  }
  private routes(): void {
    const postRouter = new PostController();
    const authRouter = new AuthController();
    const commentRouter = new CommentController();

    this.app.use("/", postRouter.router);
    this.app.use("/", authRouter.router);
    this.app.use("/", commentRouter.router);
    this.app.get("*", (req: express.Request, res: express.Response) => {
      res.sendFile(`../../client/dist/index.html`);
    });
  }
  public listen(): void {
    this.app.listen(this.PORT, () => {
      console.log(`You are listening on port ${this.PORT}`);
    });
  }
}
