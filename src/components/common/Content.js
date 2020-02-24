import React, {Component} from "react";

import '../../styles/content.css';
import Header from "../common/Header";
import ArtistsList from "../artists/ArtistsList";
import ArtistPage from "../artists/ArtistPage";
import AlbumPage from "../albums/AlbumPage";


export default class Content extends Component {
    render() {
        return (
            <div className={'content'}>
                <Header/>
                {/*<ArtistsList/>*/}

                <ArtistPage  // TODO: pass an artist object //
                    artist_name={'Nirvana'}
                    artist_id={'3'}
                    artist_popularity={'81.0'}
                />

{/*
                <AlbumPage  // TODO: pass an album object //
                    album_id={'20'}
                    album_name={'Do I Wanna Know?'}
                    album_image={'https://i.scdn.co/image/ab67616d0000b2737ba54b0fa3fe1c986a318446'}
                    album_total_tracks={'2'}
                />
*/}

                <div className={'footer'}/>
            </div>
        )
    }
}
