import React, {Component} from "react";
import find from "lodash/find";

import Album from "./Album";

export default class AlbumsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums_of_artist: [],
        };

        this.getAlbums = this.getAlbums.bind(this);
    }

    componentDidMount() {
        this.getAlbums();
    }

    getAlbums() {
        const artist_id = this.props.artist_id;
        fetch('https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/albums')
            .then(response => response.json())
            .then(data => {
                let selected_artist = find(data, ['artist', Number(artist_id)]);
                let albums_of_artist = selected_artist['albums'];
                this.setState({albums_of_artist});
                localStorage.setItem('selectedArtist', JSON.stringify(selected_artist))
            })
    }

    render() {
        const {albums_of_artist} = this.state;
        return (
            <div>
                {albums_of_artist.map(album =>
                    <Album key={album.id} album={album}/>
                )}
            </div>
        )
    }
}
