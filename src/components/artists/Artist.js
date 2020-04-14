import React, {Component} from "react";

import '../../styles/artist.css';
import FitImage from "../../libraries/FitImage";
import { Link } from "react-router-dom";

export default class Artist extends Component {
    render() {
        return (
            <div className={'artist-container'}>
                <FitImage
                    image={this.props.artist.image}
                    name={this.props.artist.name}
                    class_name_pref={'artist-img-'}
                />
                <div className={'artist-name'}>
                    <p>{this.props.artist.name}</p>
                    <Link to={`/artists/${this.props.artist.id}/albums`} className={'link-to-artist'}/>
                </div>
            </div>
        )
    }
}
