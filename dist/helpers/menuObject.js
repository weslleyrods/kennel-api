"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObject = void 0;
const createMenuObject = (activeMenu) => {
    let menu = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    if (activeMenu !== '')
        menu[activeMenu] = true;
    return menu;
};
exports.createMenuObject = createMenuObject;
