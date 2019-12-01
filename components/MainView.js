import React, {Component} from 'react'
import { View } from 'react-native'
import {mainContainer} from '../styles/base'



export default class MainView extends Component {
    
    render() {
        const {children} = this.props
        return(
            <View style={mainContainer}>
                {children}
            </View>
        )
    }
} 