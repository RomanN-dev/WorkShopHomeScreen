import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

export default class IconAndTextBar extends Component {

styleGuild = (type)=> {
    switch(type) {
        case 'Header':
            return styles.headerStyle
        case 'Normal':
            return styles.normalStyle
        case 'Footer':
            return styles.footerStyle
    }
}

    render() {
        const {children, styleType} = this.props
            return (
                <View style={this.styleGuild(styleType)}>
                    {children} 
                </View>
            );
    }
  
}

const styles = StyleSheet.create({
  normalStyle: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'flex-start',
    marginBottom:100
  },
  footerStyle: {
    borderTopWidth:1,
    height:80,
    width:'100%',
    flexDirection:'row',
    position:'absolute',
    bottom:20,
    zIndex:1
  },
  headerStyle: {
    flex:1,  
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    borderBottomWidth:1,
    position:'absolute',
    top:50,
    width:"100%",
    height:100,
    zIndex:1
  }
});
