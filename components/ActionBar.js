import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class ActionBar extends Component {
    render() {
        const {calibrateImg, calibrateText, toggleImg, toggleText, delayImg, delayText} = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{flex:1,borderWidth:1, justifyContent:'center', alignItems:'center'}}>
                    <Image source={calibrateImg} style={{height:"50%",width:"50%"}}/>
                    <Text>{calibrateText}</Text>
                </TouchableOpacity>
                <View style={{flex:1,borderWidth:1, justifyContent:'center', alignItems:'center'}}>
                    <Image source={toggleImg} style={{height:"50%",width:"50%"}} />
                    <Text>{toggleText}</Text>
                </View>
                <TouchableOpacity style={{flex:1 ,borderWidth:1, justifyContent:'center', alignItems:'center'}}>
                    <Image source={delayImg} style={{height:"50%",width:"50%"}}/>
                    <Text>{delayText}</Text>
                </TouchableOpacity>
                
                
            </View>
          );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'flex-start',
  },
});
