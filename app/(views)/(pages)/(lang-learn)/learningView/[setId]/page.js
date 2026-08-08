'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const icons_material_1 = require("@mui/icons-material");
const Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
const usePhake_1 = __importDefault(require("./usePhake"));
const Index_1 = __importDefault(require("@/app/components/Index"));
const Phake = () => {
    const { onClickDelete, onClickSiguiente, onClickSave, register, currentCard, revisedToday, learnedToday } = (0, usePhake_1.default)();
    return currentCard ? (<>
      <material_1.Grid container columnSpacing={1}>
        <material_1.Grid item md={6}>
          <material_1.Button fullWidth onClick={onClickDelete} endIcon={<Delete_1.default />}>
            <material_1.Typography variant="subtitle2" noWrap>
              Delete
            </material_1.Typography>
          </material_1.Button>
        </material_1.Grid>
        <material_1.Grid item md={6}>
          <material_1.Button fullWidth onClick={onClickSave} endIcon={<icons_material_1.Save />} sx={{ textOverflow: 'ellipsis' }}>
            <material_1.Typography variant="subtitle2" noWrap>
              Save New Time
            </material_1.Typography>
          </material_1.Button>
        </material_1.Grid>
      </material_1.Grid>

      <material_1.Grid item md={12} sm={12}>
        <Index_1.default {...register('currentCard')} value={currentCard}></Index_1.default>
      </material_1.Grid>
      <material_1.Box mb={2}/>
      <material_1.Grid container item md={12} justifyContent={'stretch'}>
        <material_1.Button onClick={onClickSiguiente} sx={{ border: 1 }} fullWidth>
          {`Save (${currentCard.nivel})  & Siguiente`}
        </material_1.Button>
      </material_1.Grid>
      <material_1.Grid container gap={10}>
        <material_1.Typography>{`No of cards learned today: ${learnedToday}`}</material_1.Typography>
        <material_1.Typography>{`No of cards revised today: ${revisedToday}`}</material_1.Typography>
      </material_1.Grid>
    </>) : (<>No more cagrgdggg</>);
};
exports.default = Phake;
