import React, {Component} from "react";

import '../../styles/artist.css';
import '../../styles/artist_page.css';
import '../../styles/main.css';
import AlbumsList from "./AlbumsList";
import ArtistHeader from "./ArtistHeader";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default class ArtistPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            song_to_play: null,
        }
    }

    render() {
        const artist_id = this.props.match.params.artistId;
        let {song_to_play} = this.props;
        return (
            <div>
                <Header/>
                <div className={'artist-page-content'}>
                    <ArtistHeader artist_id={artist_id}/>
                    <div className={'album-list-container'}>
                        <h3>Álbumes</h3>
                        <AlbumsList artist_id={artist_id}/>
                    </div>
                </div>
                <Footer song_to_play={song_to_play}/>
            </div>
        )
    }
}
