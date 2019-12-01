import React, {Component} from 'react'
import { View } from 'react-native'
import {actionPanel} from '../styles/base'
import BasePanel from './BasePanel'


export default class ActionPanel extends BasePanel {
    constructor(props) {
        super(props)
        this.containerStyle = {...actionPanel , ...(props.containerStyle || {})}
    }

} 