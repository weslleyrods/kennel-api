import {Request, Response } from 'express';
import { createMenuObject } from '../helpers/menuObject'

import { Pet } from '../models/pets';

export const home = (req: Request, res: Response) => {
  let pets = Pet.getAll();
  res.render('pages/page', {
    menu: createMenuObject(''),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    },
    pets
  })
}

export const dogs = (req: Request, res: Response)  => {
  let pets = Pet.getFromType('dog');
  res.render('pages/page', {
    menu: createMenuObject('dog'),
    banner: {
      title: 'Todos os cachorros',
      background: 'banner_dog.jpg'
    },
    pets
  })
}

export const cats = (req: Request, res: Response) => {
  let pets = Pet.getFromType('cat');
  res.render('pages/page', {
    menu: createMenuObject('cat'),
    banner: {
      title: 'Todos os gatos',
      background: 'banner_cat.jpg'
    },
    pets
  })
}

export const fishes = (req: Request, res: Response)  => {
  let pets = Pet.getFromType('fish');
  res.render('pages/page', {
    menu: createMenuObject('fish'),
    banner: {
      title: 'Todos os peixes',
      background: 'banner_fish.jpg'
    },
    pets
  })
}