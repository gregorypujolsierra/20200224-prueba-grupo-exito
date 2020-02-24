import React, {Component} from "react";
import find from "lodash/find";

import Album from "./Album";

export default class AlbumsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
        };

        this.getAlbums = this.getAlbums.bind(this);
    }

    componentDidMount() {
        this.getAlbums();
    }

    getAlbums() {
        const artist_id = this.props.artist_id;
        fetch('https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/artists/0/albums')
            .then(response => response.json())
            .then(data => {
                let artist = find(data, ['artist', Number(artist_id)]);
                this.setState({albums: artist['albums']})
            })
    }

    render() {
        const {albums} = this.state;
        return (
            <div>
                {albums.map(album =>
                    <Album key={album.id} album={album}/>
                )}
            </div>
        )
    }
}
