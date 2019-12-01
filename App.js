import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from './components/Header'
import streak from './assets/streak.png'
import uptime from './assets/Uptime.png'
import home from './assets/home.png'
import phoneImage from './assets/phone.png'
import profile from './assets/profile.png'
import setting from './assets/settings.png'
import InfoIconAndTextPanel from './components/InfoIconAndTextPanel'
import set_posture from './assets/set_posture.png'
import toggleImage from './assets/toggle.png'
import helpCenter from './assets/help_center.png'
import InformationBar from './components/InformationBar'
import FeedBackInformation from './components/FeedBackInformation'
import NotificationBar from './components/NotificationBar'
import battery from './assets/Battery.png'
import delay from './assets/delay.png'
import Avi from './assets/Avi.png'

import StickyPanel from './components/StickyPanel'
import MainView from './components/MainView'
import ActionPanel from './components/ActionPanel'
import AviPanel from './components/AviPanel'
import InfoPanel from './components/InfoPanel'
import ClickableIconAndText from './components/ClickableIconAndTextPanel'

const CORAL_COLOR = "#fe6e76"
const GREEN_UPRIGHT = "#64bd45"
const SEMI_BOLD = "600"
const BLACK_UPRIGTH = "#525252"

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
      <StickyPanel position={'up'}>
          <ActionPanel>
                <InfoIconAndTextPanel containerStyle={{flexDirection:'row', justifyContent:'center'}}  press={()=>{}}>
                  <Image source={streak} style={{height:31 , width:26}}/>
                  <Text style={{fontSize:25, marginLeft:3, color:CORAL_COLOR, fontWeight:SEMI_BOLD}}>3</Text>
                </InfoIconAndTextPanel>
                <InfoIconAndTextPanel containerStyle={{flex:2, flexDirection:'row', }} press={()=>{}} >
                  <Image source={uptime} style={{height:27 , width:27}}/>
                  <Text style={{fontSize:25, marginLeft:3, color:GREEN_UPRIGHT}} >1</Text>
                  <Text style={{fontSize:25, fontWeight:SEMI_BOLD, color:BLACK_UPRIGTH}} >/60min</Text>
                </InfoIconAndTextPanel>
                <InfoIconAndTextPanel >
                  <View style={{flex:1}}/>
                </InfoIconAndTextPanel>
            </ActionPanel>
       </StickyPanel>
            <MainView>
              <ActionPanel containerStyle={{justifyContent:'flex-end'}}>
                <InfoIconAndTextPanel containerStyle={{justifyContent:'center', alignItems:'flex-end'}} >
                  <View >
                    <Image source={battery} style={{height:41 , width:38 ,resizeMode:'contain'}}/>
                    <Text style={{textAlign:'center'}}>90%</Text>
                  </View>
                </InfoIconAndTextPanel>
              </ActionPanel>
              <AviPanel containerStyle={{alignItems:'center', justifyContent:'center'}} >
                <Image source={Avi} style={{width:"80%" , height:"80%", resizeMode:'contain' }}/>
              </AviPanel>
              <ActionPanel containerStyle={{justifyContent:'center',paddingVertical:"4%"}} >
                  <Text style={{fontSize:20, fontWeight:SEMI_BOLD, color:BLACK_UPRIGTH}}>Set Posture Needed</Text>
              </ActionPanel>

              <ActionPanel containerStyle={{flex:3, alignItems:'flex-start',}} >
                <InfoIconAndTextPanel containerStyle={{justifyContent:'space-between'}} press={()=>{}}>
                  <Image source={set_posture} style={{height:"45%" , width:"45%", resizeMode:"contain"}}/>
                  <Text style={{margin:5}}>Set Posture</Text>
                </InfoIconAndTextPanel>
                <InfoIconAndTextPanel press={()=>{}} >
                  <Image source={toggleImage} style={{height:"45%" , width:"45%", resizeMode:"contain"}}/>
                  <Text  >Vibration</Text>
                </InfoIconAndTextPanel>
                <InfoIconAndTextPanel press={()=>{}} >
                  <Image source={delay} style={{height:"45%" , width:"45%", resizeMode:"contain"}}/>
                  <Text style={{margin:5}} >Delay</Text>
                </InfoIconAndTextPanel>
                  
              </ActionPanel>
              </MainView>
       
        <StickyPanel position={'down'}>
          <ActionPanel containerStyle={{justifyContent:'center'}} >
              <InfoIconAndTextPanel press={()=>{}}>
                <Image source={home} style={{height:55 , width:77}}/>
              </InfoIconAndTextPanel>
              <InfoIconAndTextPanel press={()=>{}} >
                <Image source={profile} style={{height:55 , width:77}}/>
              </InfoIconAndTextPanel>
              <InfoIconAndTextPanel press={()=>{}} >
                <Image source={helpCenter} style={{height:55 , width:77}}/>
              </InfoIconAndTextPanel>
              <InfoIconAndTextPanel press={()=>{}}>
                <Image source={setting} style={{height:55 , width:77}}/>
              </InfoIconAndTextPanel>
            </ActionPanel>
        </StickyPanel>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
