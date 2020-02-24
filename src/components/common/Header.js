import React, {Component} from "react";

import '../../styles/header.css';

export default class Header extends Component {
    render() {
        return (
            <div className={'header'}>
                <div className={'appName'}>Prueba</div>
                <div className={'link'}>LISTA DE ARTISTAS</div>
            </div>
        )
    }
}
