import React, {Component} from "react";
import { Link } from "react-router-dom";

import '../../styles/album.css';
import FitImage from "../../libraries/FitImage";

export default class Album extends Component {
    render() {
        return (
            <div className={'album-listed-container'}>
                <div className={'album-image-container'}>
                    <FitImage
                        image={this.props.album.image}
                        name={this.props.album.name}
                        class_name_pref={'album-img-'}
                    />
                </div>
                <div className={'album-info-group'}>
                    <div className={'album-info-container'}>
                        <p className={'album-info-name'}>{this.props.album.name}
                            <br/><sub>Canciones: {this.props.album.total_tracks}</sub></p>
                    </div>
                    <div className={'album-play-button'}>
                        <i id={'album-play-icon'} className="material-icons">play_arrow</i>
                    </div>
                </div>
                <Link to={`/albums/${this.props.album.id}/songs`} className={'link-to-album'}/>
            </div>
        )
    }
}
