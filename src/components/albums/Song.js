import React, {Component} from "react";

import '../../styles/song.css';

export default class Song extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let duration, min, sec;
        duration = Number(this.props.song.duration_ms);
        min = Math.floor(duration / (60 * 1000));
        sec = (Math.floor(duration % (60 * 1000) / 1000));
        if (min < 10) {
            min = '0' + min;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }

        return (
            <div className={'song-listed-container'}>
                <div>{this.props.song.name}</div>
                <div className={'song-listed-duration'}>{min}:{sec}</div>
            </div>
        )
    }
}
