import React, { Component } from 'react';
import Logo from '../eror.png';


class errorFile extends Component {
    render() {
        return (
            <div>
                <img src={Logo}  className="img-responsive" height="1000px" alt="it is 404"/>
                    <span>{this.props.name}</span>
            </div>
        );
    }
}

export default errorFile;