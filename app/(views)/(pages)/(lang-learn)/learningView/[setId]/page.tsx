'use client'
import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'

import { Save } from '@mui/icons-material'
import Delete from '@mui/icons-material/Delete'
import useLearningView from './usePhake'
import YoutubeField from '@/app/components/YoutubeField'

const Phake: React.FC = () => {
  const {
    onClickDelete,
    onClickSiguiente,
    onClickSave,
    register,
    currentCard,
    revisedToday,
    learnedToday
  } = useLearningView()

  return currentCard ? (
    <>
      <Grid container columnSpacing={1}>
        <Grid item md={6}>
          <Button fullWidth onClick={onClickDelete} endIcon={<Delete />}>
            <Typography variant="subtitle2" noWrap>
              Delete
            </Typography>
          </Button>
        </Grid>
        <Grid item md={6}>
          <Button
            fullWidth
            onClick={onClickSave}
            endIcon={<Save />}
            sx={{ textOverflow: 'ellipsis' }}
          >
            <Typography variant="subtitle2" noWrap>
              Save New Time
            </Typography>
          </Button>
        </Grid>
      </Grid>

      <Grid item md={12} sm={12}>
        <YoutubeField
          {...register('currentCard')}
          value={currentCard}
        ></YoutubeField>
      </Grid>
      <Box mb={2} />
      <Grid container item md={12} justifyContent={'stretch'}>
        <Button onClick={onClickSiguiente} sx={{ border: 1 }} fullWidth>
          {`Save (${currentCard.nivel})  & Siguiente`}
        </Button>
      </Grid>
      <Grid container gap={10}>
        <Typography>{`No of cards learned today: ${learnedToday}`}</Typography>
        <Typography>{`No of cards revised today: ${revisedToday}`}</Typography>
      </Grid>
    </>
  ) : (
    <>No more cagrgdggg</>
  )
}

export default Phake
