import React, {Component} from "react";

import '../../styles/artist.css';
import '../../styles/artist_page.css';
import AlbumsList from "./AlbumsList";
import ArtistHeader from "./ArtistHeader";

export default class ArtistPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'artist-page-content'}>
                <ArtistHeader
                    artist_name={this.props.artist_name}
                    artist_image={"https://i.scdn.co/image/84282c28d851a700132356381fcfbadc67ff498b"}
                    artist_popularity={this.props.artist_popularity}
                />
                <div className={'album-list-container'}>
                    <h3>Álbumes</h3>
                    <AlbumsList artist_id={this.props.artist_id}/>
                </div>
            </div>
        )
    }
}
