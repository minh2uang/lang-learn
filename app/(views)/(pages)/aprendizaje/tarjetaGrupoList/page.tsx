'use client'
import { Grid, Card, CardActionArea, CardHeader, Button } from '@mui/material'
import usePhake from './usePhake'

const Phake = () => {
  const {
    tarjetaGrupos,
    onClickEdit,
    onClickTarjetaGrupo,
    onClickAddTarjetaGrupo,
    onClickAddTarjetas,
    onClickViewTarjetas
  } = usePhake()
  return (
    <>
      <Button onClick={onClickAddTarjetaGrupo}>Add Tarjeta Grupo</Button>
      {tarjetaGrupos &&
        tarjetaGrupos.map((tarjetaGrupo) => (
          <Grid
            container
            key={tarjetaGrupo._id.toString()}
            alignItems={'center'}
          >
            <Grid item xs={6}>
              <Card sx={{ mb: 2 }}>
                <CardActionArea
                  onClick={() =>
                    onClickTarjetaGrupo(tarjetaGrupo._id.toString())
                  }
                >
                  <CardHeader title={tarjetaGrupo.name} />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={1}>
              <Button
                fullWidth
                onClick={() => onClickEdit(tarjetaGrupo._id.toString())}
              >
                Edit
              </Button>
            </Grid>

            <Grid item xs={2}>
              <Button
                fullWidth
                onClick={() => onClickAddTarjetas(tarjetaGrupo._id.toString())}
              >
                Add Tarjetas
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                fullWidth
                onClick={() => onClickViewTarjetas(tarjetaGrupo._id.toString())}
              >
                View Tarjetas
              </Button>
            </Grid>
          </Grid>
        ))}
    </>
  )
}
export default Phake
