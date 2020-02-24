import React, {Component} from "react";
import {find, sample, times} from "lodash";

import '../../styles/songs_list.css';
import Song from "./Song";

export default class SongsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            songs: [],
            album_duration: 0,
            suggested_songs: [],
            playing_now: false,
        };

        this.getSongs = this.getSongs.bind(this);
    }

    componentDidMount() {
        this.getSongs();
    }

    getSongs() {
        const album_id = this.props.album_id;
        fetch('https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/albums/0/songs')
            .then(response => response.json())
            .then(data => {
                let album = find(data, ['album', Number(album_id)]);
                this.setState({songs: album['songs']});
                this.getRandomSongs(data, 4);
            })
    }

    getAlbumDuration() {  // TODO
        let {songs, album_duration} = this.state;
        {songs.map(song => {
            album_duration += Number(song.duration_ms)
        })}
        this.setState(album_duration)
    }

    getRandomSongs(data, count) {
        let {suggested_songs} = this.state;
        let random_album, random_song;
        times(count, () => {
            random_album = sample(data);  // TODO: What if I get an empty album? For while?
            random_song = sample(random_album['songs']);  // TODO: What if I get an empty song? For while?
            suggested_songs.push(random_song)
        });
        this.setState(suggested_songs)
    }

    render() {
        const {songs, suggested_songs} = this.state;
        return (
            <div className={'song-list-main'}>
                <h2>Canciones</h2>
                <div className={'song-list-container'}>
                    {songs.map((song, index) =>
                        <div className={'song-item-container'}>
                            <p className={'song-numbered-item'}>{index + 1}</p>
                            <Song key={song.id} song={song}/>
                            <a href={"#Song"} className={'link-to-song'}/>
                        </div>
                    )}
                </div>
                <h2>Sugerencias</h2>
                <div className={'song-list-container'}>
                    {suggested_songs.map((song, index) =>
                        <div className={'song-item-container'}>
                            <p className={'song-numbered-item'}>{index + 1}</p>
                            <Song key={song.id} song={song}/>
                            <a href={"#Song"} className={'link-to-song'}/>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
