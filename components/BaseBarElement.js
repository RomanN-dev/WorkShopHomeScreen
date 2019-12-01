import React, {Component} from 'react'
import { View, TouchableOpacity } from 'react-native'
import {baseStyle} from '../styles/base'


export default class BaseBarElement extends Component {
    constructor(props) {
        super(props)
        this.containerStyle = {...baseStyle , ...(props.containerStyle || {})}
        this.press = this.props.press
        this.disabled = this.props.press ? false : true
    }


    render() {
        const {children} = this.props
        return(
            <TouchableOpacity disabled={this.disabled} onPress={this.press} style={this.containerStyle}>
                {children}
            </TouchableOpacity>
        )
    }
} 