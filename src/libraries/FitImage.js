import React, { Component } from "react";

export default class FitImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img_height: null,
            img_width: null,
        }
    }

    image = React.createRef();

    getImageClassName() {
        // Compare image dimensions to get the correct class name
        let {img_height, img_width} = this.state;
        return img_height > img_width ? 'max-w' : 'max-h'
    }

    render() {
        return (
            <img
                src={this.props.image}
                alt={this.props.name}
                ref={this.image}
                onLoad={() => {
                    this.setState({img_height: this.image.current.naturalHeight});
                    this.setState({img_width: this.image.current.naturalWidth});
                }}
                className={this.props.class_name_pref + this.getImageClassName()}
            />
        )
    }
}
