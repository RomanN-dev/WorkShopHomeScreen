import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

export default class FeedBackInformation extends Component {

    render(){
        const {children} = this.props
        return (
            <View style={styles.container}>
               {children}
            </View>
          );
    }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
