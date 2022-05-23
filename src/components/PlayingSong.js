import './PlayingSong.css';

function PlayingSong(props) {
    return (
      <div className="playing-song">
          <img src={ props.song.cover } alt="" className={props.isPaused ? "" : "rotate-cover"}/>
          <h2>{ props.song.title }</h2>
          <h3>{ props.song.artist }</h3>
      </div>
    );
}

export default PlayingSong;