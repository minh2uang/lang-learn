"use client";
import TcTextField from "@repo/shared-stuff/forms/TcTextField";
import React from "react";
import usePhake from "./usePhake";
import { Button, Box, Grid } from "@mui/material";
import { ObjectId } from "mongodb";

const CreateSet = () => {
  const { register, onClickCreateButton, isSubmittable } = usePhake();
  return (
    <Grid container direction={"column"}>
      <TcTextField {...register("name")} />
      <Box mb={2} />
      <TcTextField {...register("description")} />
      <Box mb={2} />

      <Button disabled={!isSubmittable} onClick={onClickCreateButton}>
        Create Set
      </Button>
    </Grid>
  );
};

export default CreateSet;
