import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Slider,
  Typography,
  Button,
} from "@mui/material";
import { useState, useEffect, useRef, useCallback } from "react";
import YouTube, { YouTubePlayer } from "react-youtube";
import {
  KeyboardDoubleArrowUpRounded,
  KeyboardDoubleArrowDownRounded,
  KeyboardArrowUpRounded,
  KeyboardArrowDownRounded,
} from "@mui/icons-material";
import TcFieldWrapper from "@repo/shared-stuff/forms/TcFieldWrapper";
import TcFieldProps from "@repo/shared-stuff/types/Form/TcFieldProps";
import CardModel from "../models/CardModel";

type YoutubeField = TcFieldProps<
  CardModel & {
    readonly startDefault: number;
    readonly endDefault: number;
  },
  true
>;

const YoutubeField = ({ value, onChange }: YoutubeField) => {
  const { videoId, start, end, startDefault, endDefault, _id } = value;
  const [subStart, setSubStart] = useState<number>(0);
  const [subEnd, setSubEnd] = useState<number>(0);

  const setSubStartEnd = (newSubStart: number, newSubEnd: number) => {
    setSubStart(Math.max(start, newSubStart));
    setSubEnd(Math.min(end, newSubEnd));
  };

  const setStart = (newValue: number) =>
    onChange({ ...value, start: newValue });

  const setEnd = (newValue: number) => onChange({ ...value, end: newValue });
  const setStartEnd = (newStart: number, newEnd: number) =>
    onChange({ ...value, start: newStart, end: newEnd });

  const [speed, setSpeed] = useState<number>(0.9);
  const playerRef = useRef<YouTubePlayer>();
  const [duration, setDuration] = useState<number>(0);
  const min = Math.max(Math.min(startDefault || 0, start), 0);

  const setEndWithLimits = (newValue: number) => {
    setEnd(Math.min(duration, newValue));
  };
  const max = Math.min(Math.max(duration || 0, end));
  const setStartWithLimits = (newValue: number) => {
    setStart(Math.max(0, newValue));
  };

  useEffect(() => {
    if (playerRef?.current) {
      playerRef.current.setPlaybackRate(speed);
    }
  }, [speed]);

  useEffect(() => {
    setSubStartEnd(start, end);
  }, [start, end]);

  const onClickOtraVez = () => {
    if (playerRef?.current) {
      const playerState = playerRef.current.getPlayerState();
      if (playerState === 2) {
        playerRef.current.playVideo();
      } else if (playerState === 1) {
        playerRef.current.pauseVideo();
      } else if (playerState === 0) {
        playerRef.current.seekTo(subStart);
        playerRef.current.playVideo();
      }
    }
  };

  return (
    <TcFieldWrapper>
      <MuiCard sx={{ maxWidth: 10000 }}>
        <CardActionArea>
          <CardContent>
            <YouTube
              key={` ${subStart.toString()} ${subEnd.toString()} ${videoId} ${_id}`}
              videoId={videoId}
              opts={{
                width: "100%",
                height: "300",
                playerVars: { autoplay: 0, controls: 1 },
              }}
              onReady={async ({ target }) => {
                target.loadVideoById({
                  videoId,
                  startSeconds: subStart,
                  endSeconds: subEnd,
                });
              }}
              onPlay={async ({ target }) => {
                playerRef.current = target;
                setDuration(await target.getDuration());
              }}
            />
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Box width={1}>
            <Box width={1}>
              <Box width={1} display={"flex"} gap={2} alignItems={"center"}>
                <Box width={80}>
                  <Typography width={0.15}>Time</Typography>
                </Box>
                <Grid container>
                  <Grid
                    container
                    item
                    xs={12}
                    flexWrap={"nowrap"}
                    alignItems={"center"}
                    gap={1}
                  >
                    <Grid item xs={1}>
                      <Typography>{start.toFixed(2)}</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Slider
                        disabled={!!!playerRef.current}
                        defaultValue={[
                          startDefault || 0,
                          endDefault || duration || 0,
                        ]}
                        size="small"
                        min={min}
                        max={max}
                        step={0.1}
                        valueLabelFormat={(value) => <>{value.toFixed(2)}</>}
                        value={[start, end]}
                        valueLabelDisplay="off"
                        onChange={(_: any, newValue) => {
                          if (newValue instanceof Array) {
                            setStartEnd(
                              Math.min(...newValue),
                              Math.max(...newValue)
                            );
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <Typography>{end.toFixed(2)}</Typography>
                    </Grid>
                  </Grid>

                  <Box mb={10} />

                  {/*  Sub time slider */}
                  <Grid
                    container
                    item
                    xs={12}
                    flexWrap={"nowrap"}
                    alignItems={"center"}
                    gap={1}
                  >
                    <Grid item xs={1}>
                      <Typography>{subStart.toFixed(2)}</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Slider
                        disabled={!!!playerRef.current}
                        defaultValue={[start, end]}
                        size="small"
                        min={start}
                        max={end}
                        step={0.1}
                        valueLabelFormat={(value) => <>{value.toFixed(2)}</>}
                        value={[subStart, subEnd]}
                        valueLabelDisplay="off"
                        onChange={(_: any, newValue) => {
                          if (newValue instanceof Array) {
                            setSubStartEnd(
                              Math.min(...newValue),
                              Math.max(...newValue)
                            );
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <Typography>{subEnd.toFixed(2)}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container item xs={12}>
                    <Grid item xs={1}>
                      <IconButton
                        disabled={!!!duration}
                        onClick={() => setStartWithLimits(start + 1)}
                      >
                        <KeyboardDoubleArrowUpRounded />
                      </IconButton>
                      <IconButton
                        disabled={start === 0 || !!!duration}
                        onClick={() => setStartWithLimits(start - 1)}
                      >
                        <KeyboardDoubleArrowDownRounded />
                      </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton
                        disabled={!!!duration}
                        onClick={() => setStartWithLimits(start + 0.1)}
                      >
                        <KeyboardArrowUpRounded />
                      </IconButton>
                      <IconButton
                        disabled={start === 0 || !!!duration}
                        onClick={() => setStartWithLimits(start - 0.1)}
                      >
                        <KeyboardArrowDownRounded />
                      </IconButton>
                    </Grid>

                    <Grid item xs={1}>
                      <IconButton
                        disabled={end === duration || !!!duration}
                        onClick={() => setEndWithLimits(end + 0.1)}
                      >
                        <KeyboardArrowUpRounded />
                      </IconButton>

                      <IconButton
                        disabled={!!!duration}
                        onClick={() => setEndWithLimits(end - 0.1)}
                      >
                        <KeyboardArrowDownRounded />
                      </IconButton>
                    </Grid>

                    <Grid item xs={1}>
                      <IconButton
                        disabled={end === duration || !!!duration}
                        onClick={() => setEndWithLimits(end + 1)}
                      >
                        <KeyboardDoubleArrowUpRounded />
                      </IconButton>

                      <IconButton
                        disabled={!!!duration}
                        onClick={() => setEndWithLimits(end - 1)}
                      >
                        <KeyboardDoubleArrowDownRounded />
                      </IconButton>
                    </Grid>
                    <Grid item xs={3}>
                      <Button onClick={onClickOtraVez} fullWidth>
                        Otra Vez
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>

            <Box width={1} display={"flex"} gap={2}>
              <Typography>Speed</Typography>
              <Slider
                min={0.5}
                max={1}
                size="small"
                step={0.1}
                value={speed}
                valueLabelDisplay="off"
                onChange={(_: any, newValue) => {
                  setSpeed(newValue as number);
                }}
              />
            </Box>
          </Box>
        </CardActions>
      </MuiCard>
    </TcFieldWrapper>
  );
};

export default YoutubeField;
