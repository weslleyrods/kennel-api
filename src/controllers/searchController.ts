import {Request, Response } from 'express';
import { createMenuObject } from '../helpers/menuObject'
import { Pet } from '../models/pets';

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;
  let pets = Pet.getFromName(query);

  res.render('pages/page', 
    {
      menu: createMenuObject(''),
      pets
    }
  )
}