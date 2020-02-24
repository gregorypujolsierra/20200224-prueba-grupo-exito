import React, {Component} from "react";
import ArtistHeader from "../artists/ArtistHeader";

export default class PlayingSong extends Component {
    constructor(props) {
        super(props);

        this.state = {
            song: [],
        }
    }

    render() {
        return (
            <div>
                <ArtistHeader
                    artist_name={'Nirvana'}
                    artist_image={"https://i.scdn.co/image/84282c28d851a700132356381fcfbadc67ff498b"}
                    artist_popularity={'81.0'}
                />

            </div>
        );
    }
}