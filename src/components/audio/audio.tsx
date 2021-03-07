import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import rain from "../../asset/rain.mp3";
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

export default function AudioPlayer() {
    const classes = useStyles();
    const [value, setValue] = useState<number>(30);
    const [audio] = useState(new Audio(rain));
    const [isPlaying, setPlaying] = useState(false);
    const toggle = () => setPlaying(!isPlaying);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number);
        audio.volume = value / 100;
    };

    const musicOn = () => {
        audio.play();
        toggle();
    }

    const musicOff = () => {
        audio.pause();
        audio.currentTime = 0;
        toggle();
    }

    return (
        <div className={classes.root}>
            <IconButton style={{ color: 'white' }} onClick={isPlaying ? musicOff : musicOn}>
                {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <Grid container spacing={2}>
                <Grid item>
                    <VolumeDown style={{ color: 'white' }} />
                </Grid>
                <Grid item xs>
                    <Slider style={{ color: 'white' }} value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                </Grid>
                <Grid item>
                    <VolumeUp style={{ color: 'white' }} />
                </Grid>
            </Grid>
        </div>
    );
}