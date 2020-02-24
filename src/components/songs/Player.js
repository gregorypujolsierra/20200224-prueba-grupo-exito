import React, {Component} from "react";

import '../../styles/player.css';
import FitImage from "../../libraries/FitImage";
import { formatDuration } from "../../libraries/utilities";

export default class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected_song: [],
            isPlaying: false,
            loop: false,
        }
    }

    componentDidMount() {
        const song_element = document.getElementsByClassName("song-player")[0];
        song_element.play()
    }

    render() {
        const {selected_song} = this.props;
        let duration = formatDuration(this.props.song_duration_ms);
        return (
            <div className={'player-main-frame'}>
                <div className={'player-controls-info-group'}>
                    <div className={'player-controls-main-frame'}>
                        <button className={'player-control-button'}>
                            <i id={'prev-song-button'} className="material-icons">skip_previous</i>
                        </button>
                        <audio
                            controls
                            autoPlay
                            src={selected_song}
                            typeof={"audio/mpeg"}
                            className={'song-player'}
                        />
                        <button className={'player-control-button'}>
                            <i id={'next-song-button'} className="material-icons">skip_next</i>
                        </button>
                    </div>
                    <div className={'player-album-info'}>
                        <div className={'player-album-image-container'}>
                            <FitImage
                                image={this.props.album_image}
                                name={this.props.album_name}
                                class_name_pref={'album-img-'}
                            />
                        </div>
                        <p>
                            {this.props.song_name}
                            <br/><small>Duración: {duration}</small>
                        </p>
                    </div>
                </div>
                <div className={'player-other-controls'}>
                    <i id={'other-control-1'} className="material-icons">play_circle_filled</i>
                    <i id={'other-control-2'} className="material-icons">shuffle</i>
                    <i id={'other-control-3'} className="material-icons">arrow_drop_down</i>
                    <i id={'other-control-4'} className="material-icons">open_in_new</i>
                    <i id={'other-control-5'} className="material-icons">more_vert</i>
                </div>
            </div>
        );
    }
}