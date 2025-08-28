'use client'

import TcTextField from '@repo/shared-stuff/forms/TcTextField'
import usePhake from './usePhake'
import { Button, Grid } from '@mui/material'

const Phake: React.FC = () => {
  const { onClickCreate, form } = usePhake()
  return (
    <Grid container direction="column">
      <TcTextField {...form.register('pregunta')} />
      <TcTextField {...form.register('respuesta')} />
      <Button onClick={onClickCreate} disabled={form.isSubmitting}>
        Create
      </Button>
    </Grid>
  )
}
export default Phake
