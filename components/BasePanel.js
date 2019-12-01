import React, {Component} from 'react'
import { View } from 'react-native'
import {baseStyle} from '../styles/base'


export default class BasePanel extends Component {
    constructor(props) {
        super(props)
        this.containerStyle = {...baseStyle , ...(props.containerStyle || {})}
    }


    render() {
        const {children} = this.props
        return(
            <View style={this.containerStyle}>
                {children}
            </View>
        )
    }
} 