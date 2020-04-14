import React, {Component} from "react";
import {find, sample, times} from "lodash";

import '../../styles/songs_list.css';
import Song from "./Song";

export default class SongsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            songs: [],
            suggested_songs: [],
        };

        this.getSongs = this.getSongs.bind(this);
    }

    componentDidMount() {
        this.getSongs();
    }

    getSongs() {
        const album_id = this.props.album.id;
        fetch('https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/songs')
            .then(response => response.json())
            .then(data => {
                try {
                    let album = find(data, ['album', Number(album_id)]);
                    this.setState({songs: album['songs']});
                    this.getRandomSongs(data, 4);
                    this.getAlbumDuration();
                } catch (e) {
                    console.log(e)
                }
            })
    }

    getAlbumDuration() {
        let songs, album_duration;
        songs = this.state.songs;
        album_duration = 0;
        songs.map(song => {
            album_duration += Number(song.duration_ms)
        });
        this.props.sendAlbumDuration(album_duration);
    }

    getRandomSongs(data, count) {
        let {suggested_songs} = this.state;
        let available_albums = this.props.selected_artist['albums'];
        let random_album, random_song;
        times(count, () => {
            random_album = find(data, ['album', sample(available_albums)['id']]);  // TODO: What if I get an empty album? For while?
            random_song = sample(random_album['songs']);  // TODO: What if I get an empty song? For while?
            suggested_songs.push(random_song)
        });
        this.setState(suggested_songs)
    }

    selectSongToPlay(song) {
        this.props.sendSongFromList(song);
    }

    render() {
        const {songs, suggested_songs} = this.state;
        return (
            <div className={'song-list-main'}>
                <h2>Canciones</h2>
                <div className={'song-list-container'}>
                    {songs.length !== 0 ?
                        songs.map((song, index) =>
                            <div className={'song-item'}>
                                <p className={'song-numbered-item'}>{index + 1}</p>
                                <Song key={song.id} song={song}/>
                                {song.preview_url ?
                                    <div
                                        className={'link-to-song song-available'}
                                        onClick={() => this.selectSongToPlay(song)}
                                    />
                                    :
                                    <div className={'link-to-song song-unavailable'}/>
                                }
                            </div>
                        )
                        :
                        <h1>No se obtuvo información</h1>
                    }
                </div>
                <h2>Sugerencias</h2>
                <div className={'song-list-container'}>
                    {suggested_songs.map((song, index) =>
                        <div className={'song-item'}>
                            <p className={'song-numbered-item'}>{index + 1}</p>
                            <Song key={song.id} song={song}/>
                            {song.preview_url ?
                                <div
                                    className={'link-to-song song-available'}
                                    onClick={() => this.selectSongToPlay(song)}
                                />
                                :
                                <div className={'link-to-song song-unavailable'}/>
                            }
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
