import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {infoIconAndText} from '../styles/base'
import BaseBarElement from './BaseBarElement';

export default class InfoIconAndTextPanel extends BaseBarElement {
    constructor(props) {
        super(props)
        this.containerStyle = {...infoIconAndText , ...(props.containerStyle || {})}
    }
}


