"use client";
import * as React from "react";
import { Button, Grid, Input } from "@mui/material";
import useAddCard from "./usePhake";
import TcSelectField from "@repo/shared-stuff/forms/TcSelectField";
import TcTextField from "@repo/shared-stuff/forms/TcTextField";
import { SetModelClient } from "@/app/models/SetModel";
import YoutubeField from "@/app/components/YoutubeField";

const AddCard: React.FC = () => {
  const {
    doCreateCard,
    card,
    submitting,
    register,
    registerVideoIdField,
    sets,
  } = useAddCard();

  return (
    <>
      <Grid container>
        <Grid item xs={12} mb={2}>
          <TcTextField {...registerVideoIdField()} />
          <TcSelectField {...register("set")} options={sets} />
        </Grid>

        <Grid item xs={12} mb={2}>
          {card && <YoutubeField {...register("card")} value={card} />}
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            onClick={async () => await doCreateCard()}
            variant={"contained"}
            fullWidth
            disabled={submitting}
          >
            Save Card
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default AddCard;
