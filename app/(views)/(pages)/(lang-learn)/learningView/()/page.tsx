'use client'
import React from 'react'
import usePhake from './usePhake'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardHeader,
  Grid
} from '@mui/material'
import TcSelectField from '@repo/shared-stuff/forms/TcSelectField'

const Phake = () => {
  const {
    onClickSet,
    onClickEdit,
    onClickAddSet,
    sets,
    setGroups,
    setGroup,
    setSetGroup,
    filteredSets
  } = usePhake()
  return (
    <>
      <Button onClick={onClickAddSet}>Add Set</Button>
      {sets && (
        <TcSelectField
          options={setGroups}
          label={'Group'}
          onChange={setSetGroup}
          value={setGroup}
        ></TcSelectField>
      )}
      <Box mb={1} />
      {filteredSets &&
        filteredSets.map((set) => (
          <Grid container key={set._id.toString()} alignItems={'center'}>
            <Grid item xs={10}>
              <Card sx={{ mb: 2 }}>
                <CardActionArea onClick={() => onClickSet(set._id.toString())}>
                  <CardHeader title={set.name} subheader={set.description} />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth onClick={() => onClickEdit(set._id.toString())}>
                Edit
              </Button>
            </Grid>
          </Grid>
        ))}
    </>
  )
}

export default Phake
