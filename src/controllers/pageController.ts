import {Request, Response } from 'express';


export const home = (res: Response, req: Request) => {
  res.render('pages/page')
}

export const dogs = (res: Response, req: Request) => {
  res.render('pages/dogs')
}

export const cats = (res: Response, req: Request) => {
  res.render('pages/cats')
}

export const fishes = (res: Response, req: Request) => {
  res.render('pages/fishes')
}