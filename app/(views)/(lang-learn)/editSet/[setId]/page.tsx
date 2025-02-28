'use client'
import TcTextField from '@repo/shared-stuff/forms/TcTextField'
import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import usePhake from './usePhake'

const Phake: React.FC = () => {
  const { register, onClickUpdate, onClickDelete, isSubmitting } = usePhake()
  return (
    <Grid container direction="column">
      <TcTextField {...register('name')} />
      <Box mb={2} />
      <TcTextField {...register('description')} />
      <Box mb={2} />
      <TcTextField {...register('setGroup')} />

      <Box mb={2} />
      <Grid container>
        <Button onClick={onClickUpdate} disabled={isSubmitting}>
          Update
        </Button>
        <Button onClick={onClickDelete} disabled={isSubmitting}>
          Delete
        </Button>
      </Grid>
    </Grid>
  )
}

export default Phake
