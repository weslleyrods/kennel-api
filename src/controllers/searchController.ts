import {Request, Response } from 'express';
export const search = (res: Response, req: Request) => {
  res.render('pages/search')
}