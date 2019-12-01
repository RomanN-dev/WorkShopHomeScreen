import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {clickableInfoIconAndTextPanel} from '../styles/base'

export default class ClickableIconAndTextPanel extends Component {
    constructor(props) {
        super(props)
        this.containerStyle = {...clickableInfoIconAndTextPanel , ...(props.containerStyle || {})}
        this.press = this.props.press
    }

    render() {
        const {children} = this.props
        return (
            <TouchableOpacity press={this.props.press} style={this.containerStyle}>
                {children}
            </TouchableOpacity>
          );
    }
  
}


