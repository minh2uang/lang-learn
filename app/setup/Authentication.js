"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const navigation_1 = require("next/navigation");
const firebaseAuthen_1 = require("./firebaseAuthen");
const Authentication = ({ children }) => {
    const userId = firebaseAuthen_1.auth.currentUser?.uid;
    return userId ? children : (0, navigation_1.redirect)("/login");
};
exports.default = Authentication;
