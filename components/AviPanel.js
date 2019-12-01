import React, {Component} from 'react'
import { View } from 'react-native'
import {aviPanel} from '../styles/base'
import BasePanel from './BasePanel'


export default class AviPanel extends BasePanel {
    constructor(props) {
        super(props)
        this.containerStyle = {...aviPanel , ...(props.containerStyle || {})}
    }
} 