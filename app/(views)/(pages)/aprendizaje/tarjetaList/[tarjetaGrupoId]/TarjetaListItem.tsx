import TarjetaModel from '@/app/models/aprendizaje/TarjetaModel'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material'
import useDeleteRequest from '@repo/shared-stuff/hooks/queries/useDeleteRequest'

interface IProps {
  tarjeta: TarjetaModel
}
const TarjetaListItem: React.FC<IProps> = ({ tarjeta }) => {
  const doDeleteTarjeta = useDeleteRequest(
    `/aprendizaje/tarjeta/${tarjeta._id}`
  )

  return (
    <Grid container key={tarjeta._id.toString()} alignItems={'center'}>
      <Grid item xs={12}>
        <Card sx={{ mb: 2 }}>
          <CardContent>
            {Object.entries(tarjeta.fieldsModel).map(([key, value]) => (
              <Typography>{`${key}: ${value}`}</Typography>
            ))}
          </CardContent>
          <CardActions>
            <Button onClick={async () => doDeleteTarjeta()}>Delete</Button>
            <Button>Edit</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  )
}

export default TarjetaListItem
