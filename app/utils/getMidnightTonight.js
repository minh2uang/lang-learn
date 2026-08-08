"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getMidnightToday = () => {
    const d = new Date();
    d.setHours(0, 0, 0);
    return d;
};
exports.default = getMidnightToday;
