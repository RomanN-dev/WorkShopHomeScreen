import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Header extends Component {
    
    render() {
        const {strikeImg, strikeText, arrowImg, dailyGoalText} = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{flex:1,flexDirection:'row', justifyContent:"space-around", alignItems:'center',}}>
                    <Image source={strikeImg} style={{height:40, width:40}}/>
                    <Text>{strikeText}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:4,flexDirection:'row', justifyContent:'center', alignItems:'center',}}>
                    <Image source={arrowImg} style={{height:40, width:40}}/>
                    <Text>{dailyGoalText}</Text>
                </TouchableOpacity>
            </View>
          );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,  
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    borderBottomWidth:1,
    position:'absolute',
    top:50,
    width:"100%",
    zIndex:1
  },
});
