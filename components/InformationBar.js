import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class InformationBar extends Component {

    render() {
        const {batteryImg, precentage} = this.props
        return (
            <View style={styles.container}>
                <View style={{flex:3}}>

                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Image source={batteryImg} style={{height:"50%", width:"50%"}}/>
                    <Text>{precentage}</Text>
                </View>
            </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop:90,
    flex: 1,
    flexDirection:'row',
    justifyContent:'flex-end',
  },
});
