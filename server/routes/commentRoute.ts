import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/comment", (req: Request, res: Response) => {
  res.send("hello there");
});

module.exports = router;
