import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
const commentRoute = require("./routes/commentRoute");

const app: Application = express();
const PORT: number = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/dist`));
app.use("/", commentRoute);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(`${__dirname}/../dist/index.html`);
});

app.listen(PORT, () => {
  console.log(`You are listening on port ${PORT}`);
});
