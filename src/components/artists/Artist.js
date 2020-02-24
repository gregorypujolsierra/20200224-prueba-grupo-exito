import React, {Component} from "react";

import '../../styles/artist.css';
import FitImage from "../../libraries/FitImage";

export default class Artist extends Component {
    constructor(props) {
        super(props);
    }

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
                    <a href={"#artist"} className={'link-to-artist'}/>
                </div>
            </div>
        )
    }
}
