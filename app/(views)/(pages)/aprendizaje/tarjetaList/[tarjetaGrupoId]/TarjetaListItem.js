"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const useDeleteRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/useDeleteRequest"));
const TarjetaListItem = ({ tarjeta }) => {
    const doDeleteTarjeta = (0, useDeleteRequest_1.default)(`/aprendizaje/tarjeta/${tarjeta._id}`);
    return (<material_1.Grid container key={tarjeta._id.toString()} alignItems={'center'}>
      <material_1.Grid item xs={12}>
        <material_1.Card sx={{ mb: 2 }}>
          <material_1.CardContent>
            {Object.entries(tarjeta.fieldsModel).map(([key, value]) => (<material_1.Typography>{`${key}: ${value}`}</material_1.Typography>))}
          </material_1.CardContent>
          <material_1.CardActions>
            <material_1.Button onClick={async () => doDeleteTarjeta()}>Delete</material_1.Button>
            <material_1.Button>Edit</material_1.Button>
          </material_1.CardActions>
        </material_1.Card>
      </material_1.Grid>
      <material_1.Grid item xs={1}></material_1.Grid>
    </material_1.Grid>);
};
exports.default = TarjetaListItem;
