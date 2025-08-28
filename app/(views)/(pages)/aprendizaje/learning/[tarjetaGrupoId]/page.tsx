'use client'

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography
} from '@mui/material'
import usePhake from './usePhake'

const Phake: React.FC = () => {
  const {
    onClickAScore,
    tarjeta,
    onClickShowRespuesta,
    isRespuestaShown,
    tarjetaGrupo
  } = usePhake()
  if (!tarjetaGrupo) {
    return 'El grupo de tarjetas no existe'
  }
  if (!tarjeta)
    return (
      <>
        {`No hay mas tarjetas para este grupo (Learned today: ${tarjetaGrupo.learnSettings.learnedToday})`}{' '}
      </>
    )
  return (
    <Grid direction="column" container>
      <Card sx={{ mb: 2 }}>
        <CardHeader
          subheader={`${tarjetaGrupo.name} (Learned today: ${tarjetaGrupo.learnSettings.learnedToday})`}
        />
        <CardContent>
          {!isRespuestaShown
            ? tarjeta.fieldsModel.pregunta
            : tarjeta.fieldsModel.respuesta}
        </CardContent>
        <CardActions>
          {!isRespuestaShown ? (
            <Button onClick={onClickShowRespuesta}>Show Respuesta</Button>
          ) : (
            <>
              <Button onClick={async () => await onClickAScore(2)}>Mal</Button>
              <Button onClick={async () => await onClickAScore(5)}>
                No es terrible
              </Button>
            </>
          )}
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Phake
