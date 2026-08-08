'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const usePhake_1 = __importDefault(require("./usePhake"));
const Phake = () => {
    const { tarjetaGrupos, onClickEdit, onClickTarjetaGrupo, onClickAddTarjetaGrupo, onClickAddTarjetas, onClickViewTarjetas } = (0, usePhake_1.default)();
    return (<>
      <material_1.Button onClick={onClickAddTarjetaGrupo}>Add Tarjeta Grupo</material_1.Button>
      {tarjetaGrupos &&
            tarjetaGrupos.map((tarjetaGrupo) => (<material_1.Grid container key={tarjetaGrupo._id.toString()} alignItems={'center'}>
            <material_1.Grid item xs={6}>
              <material_1.Card sx={{ mb: 2 }}>
                <material_1.CardActionArea onClick={() => onClickTarjetaGrupo(tarjetaGrupo._id.toString())}>
                  <material_1.CardHeader title={tarjetaGrupo.name}/>
                </material_1.CardActionArea>
              </material_1.Card>
            </material_1.Grid>
            <material_1.Grid item xs={1}>
              <material_1.Button fullWidth onClick={() => onClickEdit(tarjetaGrupo._id.toString())}>
                Edit
              </material_1.Button>
            </material_1.Grid>

            <material_1.Grid item xs={2}>
              <material_1.Button fullWidth onClick={() => onClickAddTarjetas(tarjetaGrupo._id.toString())}>
                Add Tarjetas
              </material_1.Button>
            </material_1.Grid>
            <material_1.Grid item xs={2}>
              <material_1.Button fullWidth onClick={() => onClickViewTarjetas(tarjetaGrupo._id.toString())}>
                View Tarjetas
              </material_1.Button>
            </material_1.Grid>
          </material_1.Grid>))}
    </>);
};
exports.default = Phake;
