import React, {Component} from "react";

import '../../styles/album.css';
import '../../styles/album_page.css';
import SongsList from "./SongsList";
import FitImage from "../../libraries/FitImage";
import Player from "../songs/Player";

export default class AlbumPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={'album-page-header'}>
                    <div className={'album-image-header'}>
                        <FitImage
                            image={this.props.album_image}
                            name={this.props.album_name}
                            class_name_pref={'album-img-'}
                        />
                    </div>
                    <div className={'album-page-info'}>
                        <h2>{this.props.album_name}</h2>
                        <p>Álbum • {this.props.album_name}
                            <br/>{this.props.album_total_tracks} canciones • {this.props.album_duration}</p>
                    </div>
                </div>
                <SongsList album_id={this.props.album_id}/>
                <Player
                    album_name={this.props.album_name}
                    album_image={this.props.album_image}
                    selected_song={'https://p.scdn.co/mp3-preview/506bc9a0485990973449b0467791e06174371284?cid=76ef95421e3a4e7aac6358eba6727257'}
                />
            </div>
        )
    }
}
