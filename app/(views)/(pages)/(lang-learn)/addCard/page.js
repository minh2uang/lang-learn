'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const material_1 = require("@mui/material");
const usePhake_1 = __importDefault(require("./usePhake"));
const TcSelectField_1 = __importDefault(require("@repo/shared-stuff/forms/TcSelectField"));
const TcTextField_1 = __importDefault(require("@repo/shared-stuff/forms/TcTextField"));
const YoutubeField_1 = __importDefault(require("@/app/components/YoutubeField"));
const AddCard = () => {
    const { doCreateCard, card, submitting, register, registerVideoIdField, sets } = (0, usePhake_1.default)();
    return (<>
      <material_1.Grid container>
        <material_1.Grid item xs={12} mb={2}>
          <TcTextField_1.default {...registerVideoIdField()}/>
          <TcSelectField_1.default {...register('set')} options={sets}/>
        </material_1.Grid>

        <material_1.Grid item xs={12} mb={2}>
          {card && <YoutubeField_1.default {...register('card')} value={card}/>}
        </material_1.Grid>
        <material_1.Grid item xs={12} md={12}>
          <material_1.Button onClick={async () => await doCreateCard()} variant={'contained'} fullWidth disabled={submitting}>
            Save Card
          </material_1.Button>
        </material_1.Grid>
      </material_1.Grid>
    </>);
};
exports.default = AddCard;
