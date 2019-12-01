import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NotificationBar extends Component {

    render() {
        const {notificationStatusText} = this.props
        return (
            <View style={styles.container}>
                <Text style={{fontSize:28}}>{notificationStatusText}</Text>
            </View>
          );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
