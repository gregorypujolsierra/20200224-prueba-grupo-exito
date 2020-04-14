import React, {Component} from "react";
import { Link } from "react-router-dom";

import '../../styles/header.css';

export default class Header extends Component {
    render() {
        return (
            <div className={'header'}>
                <div className={'appName'}>React Music Player</div>
                <Link to={'/artists'} className={'link-to-home'}>LISTA DE ARTISTAS</Link>
            </div>
        )
    }
}
