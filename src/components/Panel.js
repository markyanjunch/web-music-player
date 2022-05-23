import './Panel.css';

import {useState, useEffect, useRef} from "react";

import PlayingSong from "./PlayingSong";
import Controls from "./Controls";

function Panel(props) {
    const [isPaused, setIsPaused] = useState(true);
    const audioRef = useRef();

    useEffect(() => {isPaused ? audioRef.current.pause() : audioRef.current.play()}, [isPaused, props.playingIndex]);

    function changeSong(isForward) {
        isForward==="forward"
            ? props.setPlayingIndex((props.playingIndex + 1) % props.songs.length)
            : props.setPlayingIndex((props.playingIndex - 1 + props.songs.length) % props.songs.length);
    }

    return (
        <div className="panel">
            <h1>Welcome to Yanjun's Music Player!</h1>
            <PlayingSong
                song={props.songs[props.playingIndex]}
                isPaused={isPaused}
            />
            <audio src={props.songs[props.playingIndex].audio} ref={audioRef} />
            <Controls
                isPaused={isPaused}
                setIsPaused={setIsPaused}
                changeSong={changeSong}
            />
            <div className="next-song">
                <p>Next:</p>
                <p>{props.songs[props.nextIndex].title} - {props.songs[props.nextIndex].artist}</p>
            </div>

        </div>
    );
}

export default Panel;