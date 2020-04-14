import React, {Component} from "react";

import '../../styles/artist.css';
import '../../styles/artist_page.css';
import FitImage from "../../libraries/FitImage";
import { find } from "lodash";

export default class ArtistHeader extends Component {
    getArtist(id) {
        let artists = localStorage.getItem('artists');
        artists = JSON.parse(artists);
        return find(artists, ['id', Number(id)]);
    }

    render() {
        const artist = this.getArtist(this.props.artist_id);
        return (
            <div className={'artist-header'}>
                <div id={'artist-image-header'} className={'artist-container'}>
                    <FitImage
                        image={artist.image}
                        name={artist.name}
                        class_name_pref={'artist-img-'}
                    />
                </div>
                <div className={'artist-name-popularity'}>
                    <div id={'artist-name-header'}>{artist.name}</div>
                    <div id={'artist-popularity-header'}>
                        <i id={'popularity-star-icon'} className="material-icons">star</i>
                        {artist.popularity}
                    </div>
                </div>
            </div>
        )
    }
}