//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useEffect } from "react";
import ChatList from "./CustomeList";
import ChatsJson from "./chats.json"
import {AntDesign,SimpleLineIcons} from "@expo/vector-icons"
import Users from "./user.json";
import { useLayoutEffect } from "react";
import { TouchableOpacity } from "react-native";
// create a component
const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const excuteSignin = () => {
    alert("sign in");
  };
  const activeUser = () => {
    alert("sign in");
  };
  const enterChat = (id) => {
    navigation.navigate("Chat",{id:id});
  };
  useLayoutEffect(()=>{
     navigation.setOptions({
       title: "Signal",
       headerStyle: { backgroundColor: "#fff" },
       headerTitleStyle: { color: "black" },
       headerBackTitleVisible: false,
       headerTintColor: "black",
       animationEnabled:false,
       headerLeft: () => {
         return (
           <View style={{ marginLeft: 20 }}>
             <TouchableOpacity onPress={activeUser} activeOpacity={0.5}>
               <Avatar rounded source={{ uri: ChatsJson.profile.picture }} />
             </TouchableOpacity>
           </View>
         );
       },
       headerRight: () => {
         return (
           <View style={{flexDirection:"row",justifyContent:"space-between",marginRight: 20 }}>
             <TouchableOpacity onPress={activeUser} activeOpacity={0.5}>
               <AntDesign name="camera" size={24} color="black" />
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>{
               navigation.navigate("AddChat")
             }} activeOpacity={0.5}>
               <AntDesign name="edit" size={24} color="black" />
             </TouchableOpacity>
           </View>
         );
       },
     });
  },[navigation])
  useEffect(() => {}, []);

  return (
    <SafeAreaView behavior="padding" style={styles.container}>
    <StatusBar style="auto"/>
      <ScrollView>
      {
        ChatsJson.profile.friends.map((user)=>{
          return <ChatList
          onClickList={enterChat}
          id={user.id}
          chatName={user.name}
          enterChat={user.lastChat}
          profileDp={user.picture}
          key={user.id}
        />
        })
      }
        
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    alignContent: "center",
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});

//make this component available to the app
export default HomeScreen;
