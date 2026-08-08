'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TcTextField_1 = __importDefault(require("@repo/shared-stuff/forms/TcTextField"));
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const usePhake_1 = __importDefault(require("./usePhake"));
const Phake = () => {
    const { register, onClickCreate, isSubmitting } = (0, usePhake_1.default)();
    return (<material_1.Grid container direction="column">
      <TcTextField_1.default {...register('name')}/>

      <material_1.Box mb={2}/>

      <material_1.Box mb={2}/>
      <material_1.Grid container>
        <material_1.Button onClick={onClickCreate} disabled={isSubmitting}>
          Create
        </material_1.Button>
      </material_1.Grid>
    </material_1.Grid>);
};
exports.default = Phake;
