"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_youtube_1 = __importDefault(require("react-youtube"));
const icons_material_1 = require("@mui/icons-material");
const TcFieldWrapper_1 = __importDefault(require("@repo/shared-stuff/forms/TcFieldWrapper"));
const YoutubeField = ({ value, onChange }) => {
    const { videoId, start, end, startDefault, endDefault, _id } = value;
    const [subStart, setSubStart] = (0, react_1.useState)(0);
    const [subEnd, setSubEnd] = (0, react_1.useState)(0);
    const setSubStartEnd = (newSubStart, newSubEnd) => {
        setSubStart(Math.max(start, newSubStart));
        setSubEnd(Math.min(end, newSubEnd));
    };
    const setStart = (newValue) => onChange({ ...value, start: newValue });
    const setEnd = (newValue) => onChange({ ...value, end: newValue });
    const setStartEnd = (newStart, newEnd) => onChange({ ...value, start: newStart, end: newEnd });
    const [speed, setSpeed] = (0, react_1.useState)(0.9);
    const playerRef = (0, react_1.useRef)();
    const [duration, setDuration] = (0, react_1.useState)(0);
    const min = Math.max(Math.min(startDefault || 0, start), 0);
    const setEndWithLimits = (newValue) => {
        setEnd(Math.min(duration, newValue));
    };
    const max = Math.min(Math.max(duration || 0, end));
    const setStartWithLimits = (newValue) => {
        setStart(Math.max(0, newValue));
    };
    (0, react_1.useEffect)(() => {
        if (playerRef?.current) {
            playerRef.current.setPlaybackRate(speed);
        }
    }, [speed]);
    (0, react_1.useEffect)(() => {
        setSubStartEnd(start, end);
    }, [start, end]);
    const onClickOtraVez = () => {
        if (playerRef?.current) {
            const playerState = playerRef.current.getPlayerState();
            if (playerState === 2) {
                playerRef.current.playVideo();
            }
            else if (playerState === 1) {
                playerRef.current.pauseVideo();
            }
            else if (playerState === 0) {
                playerRef.current.seekTo(subStart);
                playerRef.current.playVideo();
            }
        }
    };
    return (<TcFieldWrapper_1.default>
      <material_1.Card sx={{ maxWidth: 10000 }}>
        <material_1.CardActionArea>
          <material_1.CardContent>
            <react_youtube_1.default key={` ${subStart.toString()} ${subEnd.toString()} ${videoId} ${_id}`} videoId={videoId} opts={{
            width: '100%',
            height: '300',
            playerVars: { autoplay: 0, controls: 1 }
        }} onReady={async ({ target }) => {
            target.loadVideoById({
                videoId,
                startSeconds: subStart,
                endSeconds: subEnd
            });
        }} onPlay={async ({ target }) => {
            playerRef.current = target;
            setDuration(await target.getDuration());
        }}/>
          </material_1.CardContent>
        </material_1.CardActionArea>

        <material_1.CardActions>
          <material_1.Box width={1}>
            <material_1.Box width={1}>
              <material_1.Box width={1} display={'flex'} gap={2} alignItems={'center'}>
                <material_1.Box width={80}>
                  <material_1.Typography width={0.15}>Time</material_1.Typography>
                </material_1.Box>
                <material_1.Grid container>
                  <material_1.Grid container item xs={12} flexWrap={'nowrap'} alignItems={'center'} gap={1}>
                    <material_1.Grid item xs={1}>
                      <material_1.Typography>{start.toFixed(2)}</material_1.Typography>
                    </material_1.Grid>
                    <material_1.Grid item xs={10}>
                      <material_1.Slider disabled={!!!playerRef.current} defaultValue={[
            startDefault || 0,
            endDefault || duration || 0
        ]} size="small" min={min} max={max} step={0.1} valueLabelFormat={(value) => <>{value.toFixed(2)}</>} value={[start, end]} valueLabelDisplay="off" onChange={(_, newValue) => {
            if (newValue instanceof Array) {
                setStartEnd(Math.min(...newValue), Math.max(...newValue));
            }
        }}/>
                    </material_1.Grid>
                    <material_1.Grid item xs={1}>
                      <material_1.Typography>{end.toFixed(2)}</material_1.Typography>
                    </material_1.Grid>
                  </material_1.Grid>

                  <material_1.Box mb={10}/>

                  {/*  Sub time slider */}
                  <material_1.Grid container item xs={12} flexWrap={'nowrap'} alignItems={'center'} gap={1}>
                    <material_1.Grid item xs={1}>
                      <material_1.Typography>{subStart.toFixed(2)}</material_1.Typography>
                    </material_1.Grid>
                    <material_1.Grid item xs={10}>
                      <material_1.Slider disabled={!!!playerRef.current} defaultValue={[start, end]} size="small" min={start} max={end} step={0.1} valueLabelFormat={(value) => <>{value.toFixed(2)}</>} value={[subStart, subEnd]} valueLabelDisplay="off" onChange={(_, newValue) => {
            if (newValue instanceof Array) {
                setSubStartEnd(Math.min(...newValue), Math.max(...newValue));
            }
        }}/>
                    </material_1.Grid>
                    <material_1.Grid item xs={1}>
                      <material_1.Typography>{subEnd.toFixed(2)}</material_1.Typography>
                    </material_1.Grid>
                  </material_1.Grid>
                  <material_1.Grid container item xs={12}>
                    <material_1.Grid item xs={1}>
                      <material_1.IconButton disabled={!!!duration} onClick={() => setStartWithLimits(start + 1)}>
                        <icons_material_1.KeyboardDoubleArrowUpRounded />
                      </material_1.IconButton>
                      <material_1.IconButton disabled={start === 0 || !!!duration} onClick={() => setStartWithLimits(start - 1)}>
                        <icons_material_1.KeyboardDoubleArrowDownRounded />
                      </material_1.IconButton>
                    </material_1.Grid>
                    <material_1.Grid item xs={1}>
                      <material_1.IconButton disabled={!!!duration} onClick={() => setStartWithLimits(start + 0.1)}>
                        <icons_material_1.KeyboardArrowUpRounded />
                      </material_1.IconButton>
                      <material_1.IconButton disabled={start === 0 || !!!duration} onClick={() => setStartWithLimits(start - 0.1)}>
                        <icons_material_1.KeyboardArrowDownRounded />
                      </material_1.IconButton>
                    </material_1.Grid>

                    <material_1.Grid item xs={1}>
                      <material_1.IconButton disabled={end === duration || !!!duration} onClick={() => setEndWithLimits(end + 0.1)}>
                        <icons_material_1.KeyboardArrowUpRounded />
                      </material_1.IconButton>

                      <material_1.IconButton disabled={!!!duration} onClick={() => setEndWithLimits(end - 0.1)}>
                        <icons_material_1.KeyboardArrowDownRounded />
                      </material_1.IconButton>
                    </material_1.Grid>

                    <material_1.Grid item xs={1}>
                      <material_1.IconButton disabled={end === duration || !!!duration} onClick={() => setEndWithLimits(end + 1)}>
                        <icons_material_1.KeyboardDoubleArrowUpRounded />
                      </material_1.IconButton>

                      <material_1.IconButton disabled={!!!duration} onClick={() => setEndWithLimits(end - 1)}>
                        <icons_material_1.KeyboardDoubleArrowDownRounded />
                      </material_1.IconButton>
                    </material_1.Grid>
                    <material_1.Grid item xs={3}>
                      <material_1.Button onClick={onClickOtraVez} fullWidth>
                        Otra Vez
                      </material_1.Button>
                    </material_1.Grid>
                  </material_1.Grid>
                </material_1.Grid>
              </material_1.Box>
            </material_1.Box>

            <material_1.Box width={1} display={'flex'} gap={2}>
              <material_1.Typography>Speed</material_1.Typography>
              <material_1.Slider min={0.5} max={1} size="small" step={0.1} value={speed} valueLabelDisplay="off" onChange={(_, newValue) => {
            setSpeed(newValue);
        }}/>
            </material_1.Box>
          </material_1.Box>
        </material_1.CardActions>
      </material_1.Card>
    </TcFieldWrapper_1.default>);
};
exports.default = YoutubeField;
