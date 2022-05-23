import './PlayListSong.css'

function PlayListSong(props) {
    return (
        <div className={`playlist-song ${props.index===props.playingIndex ? "current-song" : ""}`}
             onClick={() => {props.setPlayingIndex(props.index);}}>
            <img src={ props.song.cover } alt="" />
            <div className='playlist-description'>
                <p className='playlist-title'>{ props.song.title }</p>
                <p className='playlist-artist'>{ props.song.artist }</p>
            </div>
        </div>
    );
}

export default PlayListSong;