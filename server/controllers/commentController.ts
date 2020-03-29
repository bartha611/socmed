import express, { Request, Response } from "express";
import pool from "../pool";
import * as types from "../../store/Comments/types";

exports.create = (req: Request, res: Response) => {
  const comment: types.newComment = req.body.payload;
};

exports.update = (req: Request, res: Response) => {
  const {} = req.body;
};
