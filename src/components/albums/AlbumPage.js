import React, {Component} from "react";

import '../../styles/album.css';
import '../../styles/album_page.css';
import SongsList from "./SongsList";
import FitImage from "../../libraries/FitImage";

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
                            image={"https://i.scdn.co/image/ab67616d0000b2737ba54b0fa3fe1c986a318446"}
                            name={this.props.album_name}
                            class_name_pref={'album-img-'}
                        />
                    </div>
                    <div className={'album-page-info'}>
                        <h2>{this.props.album_name}</h2>
                        <p>Álbum • {this.props.album_name}
                            <br/>{this.props.album_total_tracks} canciones • </p>
                    </div>
                </div>
                <SongsList album_id={this.props.album_id}/>
            </div>
        )
    }
}
