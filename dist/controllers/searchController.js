"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const menuObject_1 = require("../helpers/menuObject");
const pets_1 = require("../models/pets");
const search = (req, res) => {
    let query = req.query.q;
    let pets = pets_1.Pet.getFromName(query);
    res.render('pages/page', {
        menu: (0, menuObject_1.createMenuObject)(''),
        pets
    });
};
exports.search = search;
