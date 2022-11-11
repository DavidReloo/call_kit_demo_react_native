import { NavigationContainer, useNavigation} from '@react-navigation/native';
import React from "react";
import { Button, View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="CallPage" component={CallPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomePage(props) {
    const navigation = useNavigation();
    return (
        <View style={{flex: 1,alignItems: 'center',justifyContent: 'space-around'}}>
            <Button title="Call" onPress={() => { navigation.navigate('CallPage') }} />
        </View>
    )
}

import ZegoUIKitPrebuiltCall, {GROUP_VOICE_CALL_CONFIG} from '@zegocloud/zego-uikit-prebuilt-call-rn';
function CallPage(props) {
  randomUserID = String(Math.floor(Math.random() * 100000))
  return (
      <View style={{flex: 1}}>
        <ZegoUIKitPrebuiltCall
          appID={Your App ID}
          appSign= Your App Sign
          userID={randomUserID}
          userName={'user_'+randomUserID}
          callID='testCallID'

          config={{
            ...GROUP_VOICE_CALL_CONFIG,
            onHangUp: () => {props.navigation.navigate('HomePage')},
          }}
        />
      </View>
  )
}
