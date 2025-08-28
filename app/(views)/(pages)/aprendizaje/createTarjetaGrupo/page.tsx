'use client'
import TcTextField from '@repo/shared-stuff/forms/TcTextField'
import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import usePhake from './usePhake'

const Phake: React.FC = () => {
  const { register, onClickCreate, isSubmitting } = usePhake()
  return (
    <Grid container direction="column">
      <TcTextField {...register('name')} />

      <Box mb={2} />

      <Box mb={2} />
      <Grid container>
        <Button onClick={onClickCreate} disabled={isSubmitting}>
          Create
        </Button>
      </Grid>
    </Grid>
  )
}

export default Phake
