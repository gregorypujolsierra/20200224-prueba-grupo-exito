import React, {Component} from "react";

import '../../styles/song.css';
import { formatDuration } from "../../libraries/utilities";

export default class Song extends Component {
    render() {
        let duration = formatDuration(this.props.song.duration_ms);
        return (
            <div className={'song-listed-container'}>
                <div>{this.props.song.name}</div>
                <div className={'song-listed-duration'}>{duration}</div>
            </div>
        )
    }
}
