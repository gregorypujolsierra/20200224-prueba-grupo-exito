import React, {Component} from "react";

import '../../styles/footer.css'
import Player from "../songs/Player";

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            song_to_play: null
        }
    }

    render() {
        let player;
        let {song_to_play} = this.props || this.state;
        if (song_to_play) {
            player = <Player songToPlay={song_to_play}/>;
        } else {
            player = <div id={'empty-footer'}/>
        }
        return (
            <div>
                {player}
            </div>
        );
    }

}