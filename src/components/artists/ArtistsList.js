import React, {Component} from "react";

import '../../styles/artists_list.css';
import '../../styles/main.css';
import Artist from "./Artist";
import Header from "../common/Header";


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
            .then(artists => {
                this.setState({artists});
                localStorage.setItem('artists', JSON.stringify(artists))
            })
    }

    render() {
        const {artists} = this.state;
        return (
            <div className={'content'}>
                <Header/>
                <div className={"artists-container"}>
                    {artists.map(artist =>
                        artist.id && artist.name? <Artist key={artist.id} artist={artist}/> : null
                    )}
                </div>
                {/*<div className={'footer'}/>*/}
            </div>
        )
    }
}
