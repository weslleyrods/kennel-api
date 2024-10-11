"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const menuObject_1 = require("../helpers/menuObject");
const pets_1 = require("../models/pets");
const home = (req, res) => {
    let pets = pets_1.Pet.getAll();
    res.render('pages/page', {
        menu: (0, menuObject_1.createMenuObject)(''),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        pets
    });
};
exports.home = home;
const dogs = (req, res) => {
    let pets = pets_1.Pet.getFromType('dog');
    res.render('pages/page', {
        menu: (0, menuObject_1.createMenuObject)('dog'),
        banner: {
            title: 'Todos os cachorros',
            background: 'banner_dog.jpg'
        },
        pets
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let pets = pets_1.Pet.getFromType('cat');
    res.render('pages/page', {
        menu: (0, menuObject_1.createMenuObject)('cat'),
        banner: {
            title: 'Todos os gatos',
            background: 'banner_cat.jpg'
        },
        pets
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    let pets = pets_1.Pet.getFromType('fish');
    res.render('pages/page', {
        menu: (0, menuObject_1.createMenuObject)('fish'),
        banner: {
            title: 'Todos os peixes',
            background: 'banner_fish.jpg'
        },
        pets
    });
};
exports.fishes = fishes;
