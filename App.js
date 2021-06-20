import 'react-native-gesture-handler';
import React ,{useState}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "expo-status-bar";
import Login from './screens/LoginScreen';
import Register from './screens/Register';
import Home from './screens/HomeScreen';
import AddChat from './screens/AddChatScreen';
import Chat from './screens/Chat';
const Stack =createStackNavigator()

const globalScreenOPtions={
  headerStyle:{backgroundColor:"#2c6bed"},
  headerTitleStyle:{color:"white",alignSelf: 'center'},
  headerTintColor:"white",
  headerBackTitleVisible:true
}
export default function App() {
  return (
    <NavigationContainer >
    <StatusBar style="light"/>
    <Stack.Navigator screenOptions={{...globalScreenOPtions,animationEnabled:false,}}>
    <Stack.Screen name="Login" component={Login}  options={{animationEnabled:false}}/>
    <Stack.Screen name="Register" component={Register}/>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="AddChat" component={AddChat}/>
    <Stack.Screen name="Chat" component={Chat}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
