//import liraries
import React, { Component,useLayoutEffect,useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Button, Input, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome"
// create a component
const AddChatScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    useLayoutEffect(()=>{
        navigation.setOptions({
          title: "Add a new Chat",
          headerStyle:{backgroundColor:"#2c6bed"},
          headerBackTitle:"Chats",
          headerTitleStyle: { color: "white",alignSelf:"center" },
          headerBackTitleVisible: true,
          headerTintColor: "white",
          animationEnabled:false
          })
     },[navigation])
    
     const createChat=async()=>{
         
     }
    return (
        <View style={styles.container}>
        <StatusBar style="light"/>
        <Input
        placeholder="enter a  chat name"
        type="email"
        leftIcon={<Icon name="wechat" type="antdesign" size={24} color="black"/>}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Create new Chat" containerStyle={styles.button} onPress={createChat}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:30,
        height:"100%",
        backgroundColor: '#fff',
    },
    button: {
        width:"100%",
        marginTop:10
    },
});

//make this component available to the app
export default AddChatScreen;
