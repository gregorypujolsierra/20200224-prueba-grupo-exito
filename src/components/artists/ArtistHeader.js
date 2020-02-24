import React, {Component} from "react";

import '../../styles/artist.css';
import '../../styles/artist_page.css';
import FitImage from "../../libraries/FitImage";

export default class ArtistHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={'artist-header'}>
                <div id={'artist-image-header'} className={'artist-container'}>
                    <FitImage
                        image={this.props.artist_image}
                        name={this.props.artist_name}
                        class_name_pref={'artist-img-'}
                    />
                </div>
                <div className={'artist-name-popularity'}>
                    <div id={'artist-name-header'}>{this.props.artist_name}</div>
                    <div id={'artist-popularity-header'}>
                        <i id={'popularity-star-icon'} className="material-icons">star</i>
                        {this.props.artist_popularity}
                    </div>
                </div>
            </div>
        )
    }
}