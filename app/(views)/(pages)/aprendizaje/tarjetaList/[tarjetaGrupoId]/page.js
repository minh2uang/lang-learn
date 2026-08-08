'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usePhake_1 = __importDefault(require("./usePhake"));
const TarjetaListItem_1 = __importDefault(require("./TarjetaListItem"));
const Phake = () => {
    const { tarjetaArrayByList } = (0, usePhake_1.default)();
    return (<>
      <>
        {tarjetaArrayByList &&
            tarjetaArrayByList.map((tarjeta) => (<TarjetaListItem_1.default tarjeta={tarjeta}></TarjetaListItem_1.default>))}
      </>
    </>);
};
exports.default = Phake;
