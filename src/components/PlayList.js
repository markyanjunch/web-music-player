import './PlayList.css';
import PlayListSong from "./PlayListSong";

function PlayList(props) {
    let key = 0;
    return (
        <div className={`playlist ${props.ifPlayList ? "shown" : ""}`}>
            {
                props.songs.map((song) => (
                    <PlayListSong
                        index={key}
                        key={key++} // avoid console error
                        song={song}
                        playingIndex={props.playingIndex}
                        setPlayingIndex={props.setPlayingIndex}
                    />
                    )
                )
            }
        </div>
    );
}

export default PlayList;