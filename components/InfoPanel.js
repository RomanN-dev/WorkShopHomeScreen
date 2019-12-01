import React, {Component} from 'react'
import { View } from 'react-native'
import {infoPanel} from '../styles/base'
import BasePanel from './BasePanel'


export default class InfoPanel extends BasePanel {
    constructor(props) {
        super(props)
        this.containerStyle = {...infoPanel , ...(props.containerStyle || {})}
    }
} 