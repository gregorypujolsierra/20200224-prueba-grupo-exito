import React, {Component} from "react";
import { find } from "lodash";

import '../../styles/album.css';
import '../../styles/album_page.css';
import '../../styles/artist_page.css';
import SongsList from "./SongsList";
import FitImage from "../../libraries/FitImage";
import { formatDuration } from "../../libraries/utilities";
import Header from "../common/Header";
import ArtistHeader from "../artists/ArtistHeader";
import Footer from "../common/Footer";

export default class AlbumPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            album_duration: 0,
            song_to_play: null,
        };

        this.goBack = this.goBack.bind(this);
    }

    getSelectedArtist() {
        let selected_artist = localStorage.getItem('selectedArtist');
        return JSON.parse(selected_artist);
    }

    getAlbumDuration = (album_duration) => {
        this.setState({album_duration});
    };

    sendSongToFooter = (song_to_play) => {
        this.setState({song_to_play});
    };

    goBack() {
        this.props.history.goBack();
    }

    render() {
        const selected_artist = this.getSelectedArtist();
        const artist_id = selected_artist['artist'];
        const album_id = this.props.match.params.albumId;
        const album = find(selected_artist['albums'], ['id', Number(album_id)]);
        return (
            <div>
                <Header/>
                <div className={'artist-page-content'}>
                    <ArtistHeader artist_id={artist_id}/>
                    <div className={'album-list-container'}>
                        <h3 onClick={this.goBack} className={'go-back'}>Álbumes</h3>
                    </div>
                </div>
                <div className={'album-page-header'}>
                    <div className={'album-image-header'}>
                        <FitImage
                            image={album.image}
                            name={album.name}
                            class_name_pref={'album-img-'}
                        />
                    </div>
                    <div className={'album-page-info'}>
                        <h2>{album.name}</h2>
                        <p>Álbum • {album.name}
                            <br/>{album.total_tracks} canciones • {formatDuration(this.state.album_duration)}</p>
                    </div>
                </div>
                <SongsList
                    album={album}
                    selected_artist={selected_artist}
                    sendAlbumDuration={this.getAlbumDuration}
                    sendSongFromList={this.sendSongToFooter}
                >
                </SongsList>
                <Footer song_to_play={this.state.song_to_play}/>
            </div>
        )
    }
}
