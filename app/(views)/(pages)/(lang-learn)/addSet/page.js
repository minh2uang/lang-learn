"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TcTextField_1 = __importDefault(require("@repo/shared-stuff/forms/TcTextField"));
const react_1 = __importDefault(require("react"));
const usePhake_1 = __importDefault(require("./usePhake"));
const material_1 = require("@mui/material");
const CreateSet = () => {
    const { register, onClickCreateButton, isSubmittable } = (0, usePhake_1.default)();
    return (<material_1.Grid container direction={"column"}>
      <TcTextField_1.default {...register("name")}/>
      <material_1.Box mb={2}/>
      <TcTextField_1.default {...register("description")}/>
      <material_1.Box mb={2}/>

      <material_1.Button disabled={!isSubmittable} onClick={onClickCreateButton}>
        Create Set
      </material_1.Button>
    </material_1.Grid>);
};
exports.default = CreateSet;
