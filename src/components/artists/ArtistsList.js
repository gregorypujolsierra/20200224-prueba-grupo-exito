import React, {Component} from "react";

import '../../styles/artists_list.css';
import Artist from "./Artist";


export default class ArtistsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artists: [],
        };

        this.getArtists = this.getArtists.bind(this);
    }

    componentDidMount() {
        this.getArtists();
    }

    getArtists() {
        fetch('https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/artists')
            .then(response => response.json())
            .then(artists => this.setState({artists}))
    }

    render() {
        const {artists} = this.state;
        return (
            <div className={"artists-container"}>
                {artists.map(artist =>
                    artist.id && artist.name? <Artist key={artist.id} artist={artist}/> : <div/>
                )}
            </div>
        )
    }
}