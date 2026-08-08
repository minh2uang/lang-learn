'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const usePhake_1 = __importDefault(require("./usePhake"));
const Phake = () => {
    const { onClickAScore, tarjeta, onClickShowRespuesta, isRespuestaShown, tarjetaGrupo } = (0, usePhake_1.default)();
    if (!tarjetaGrupo) {
        return 'El grupo de tarjetas no existe';
    }
    if (!tarjeta)
        return (<>
        {`No hay mas tarjetas para este grupo (Learned today: ${tarjetaGrupo.learnSettings.learnedToday})`}{' '}
      </>);
    return (<material_1.Grid direction="column" container>
      <material_1.Card sx={{ mb: 2 }}>
        <material_1.CardHeader subheader={`${tarjetaGrupo.name} (Learned today: ${tarjetaGrupo.learnSettings.learnedToday})`}/>
        <material_1.CardContent>
          {!isRespuestaShown
            ? tarjeta.fieldsModel.pregunta
            : tarjeta.fieldsModel.respuesta}
        </material_1.CardContent>
        <material_1.CardActions>
          {!isRespuestaShown ? (<material_1.Button onClick={onClickShowRespuesta}>Show Respuesta</material_1.Button>) : (<>
              <material_1.Button onClick={async () => await onClickAScore(2)}>Mal</material_1.Button>
              <material_1.Button onClick={async () => await onClickAScore(5)}>
                No es terrible
              </material_1.Button>
            </>)}
        </material_1.CardActions>
      </material_1.Card>
    </material_1.Grid>);
};
exports.default = Phake;
