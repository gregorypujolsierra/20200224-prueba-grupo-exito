import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import './App.css';
import ArtistsList from "./components/artists/ArtistsList";
import ArtistPage from "./components/artists/ArtistPage";
import AlbumPage from "./components/albums/AlbumPage";

export default function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/artists" exact component={ArtistsList} />
          <Route path="/artists/:artistId/albums" component={ArtistPage} />
          <Route path="/albums/:albumId/songs" component={AlbumPage} />
        </Switch>
      </Router>
  );
}

const Home = () => (
    <Redirect to={'/artists'}/>
);
