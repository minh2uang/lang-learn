'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TcTextField_1 = __importDefault(require("@repo/shared-stuff/forms/TcTextField"));
const usePhake_1 = __importDefault(require("./usePhake"));
const material_1 = require("@mui/material");
const Phake = () => {
    const { onClickCreate, form } = (0, usePhake_1.default)();
    return (<material_1.Grid container direction="column">
      <TcTextField_1.default {...form.register('pregunta')}/>
      <TcTextField_1.default {...form.register('respuesta')}/>
      <material_1.Button onClick={onClickCreate} disabled={form.isSubmitting}>
        Create
      </material_1.Button>
    </material_1.Grid>);
};
exports.default = Phake;
