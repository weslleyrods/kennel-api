import {Request, Response } from 'express';

export const notFoundPage = (req: Request, res: Response) => {
  res.render('pages/notFoundPage', {
    
  })
}