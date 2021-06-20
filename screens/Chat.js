//import liraries
import React, { Component,useLayoutEffect } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome"
import { TouchableWithoutFeedback,TouchableOpacity } from "react-native";
import Users from "./user.json"
import ChatsJson from "./chats.json"
import { ScrollView,TextInput } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { Keyboard } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';


// create a component
const ChatScreen = ({navigation,route}) => {
    const scrollViewRef=useRef(null);
    let selectedUser=ChatsJson.friends.find(log=>log.id===route.params.id);
    const [chatlog,setChatlog]=useState([])
    const [newMessage,setNewMessage]=useState("")
        console.log("User",selectedUser);
        useEffect(()=>{
           setChatlog(selectedUser.chatlog)
        },[])
    useLayoutEffect(()=>{
        navigation.setOptions({
          title: "Chat",
          headerBackTitleVisible:false,
          headerTitleAlign:"left",
          animationEnabled:false,
          headerTitle:()=>{
             return  <View
             style={{flexDirection:"row", alignItems:"center"}}
             >
             <Avatar rounded source={{ uri:selectedUser.picture }} />
             <Text style={{color:'white',marginLeft:10,fontWeight:"700"}}>{selectedUser.name}</Text>
              </View>
          },
          headerRight: () => {
            return (
              <View style={{flexDirection:"row",justifyContent:"space-between",width:80,marginRight: 20 }}>
                <TouchableOpacity activeOpacity={0.5}>
                <Icon name="video-camera" type="antdesign" size={24} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                  navigation.navigate("AddChat")
                }} activeOpacity={0.5}>
                <Icon name="phone" type="antdesign" size={24} color="white"/>
                </TouchableOpacity>
              </View>
            );
          },
        });
     },[navigation])
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar style="light" />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
          keyboardVerticalOffset={90}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              <ScrollView
                contentContainerStyle={{ paddingTop: 10 }}
                bounces={true}
                bouncesZoom={true}
                alwaysBounceVertical
                onScrollAnimationEnd
                ref={ scrollViewRef  }
                onContentSizeChange={() => {
                    console.log("scrollView",scrollViewRef.current.scrollToEnd());
                }}>
                {chatlog.map((log) => {
                  if (log.side == "left") {
                    return (
                      <View key={log.message_id} style={styles.sender}>
                        <Avatar
                          size={30}
                          position="absolute"
                          rounded
                          bottom={-15}
                          left={-5}
                          source={{ uri: selectedUser.picture }}
                        />
                        <Text style={styles.senderText}>{log.text}</Text>
                      </View>
                    );
                  } else {
                    return (
                      <View key={log.message_id} style={styles.reciever}>
                        <Avatar
                          size={30}
                          position="absolute"
                          rounded
                          bottom={-15}
                          right={-5}
                          source={{ uri: ChatsJson.profile.picture}}
                        />
                        <Text style={styles.recieverText}>
                         {log.text}
                        </Text>
                      </View>
                    );
                  }
                })}
              </ScrollView>
              <View style={styles.footer}>
                <TextInput
                  value={newMessage}
                  onChangeText={(text) => {
                    setNewMessage(text);
                  }}
                  style={styles.textInput}
                  placeholder="Signal Message"
                />
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    let msgId = chatlog.length;
                    msgId++;
                    let message = {
                      text: newMessage,
                      timestamp: "10:05 AM",
                      side: "right",
                      message_id: msgId+"msg_id",
                    };
                    setChatlog([...chatlog,message]);
                    setNewMessage("")
                    Keyboard.dismiss();
                  }}
                >
                  <Icon name="send" size={24} color="#2B68E6" />
                </TouchableOpacity>
              </View>
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    alignContent: "center",
    width: "100%",
    padding: 15,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: "transparent",
    backgroundColor: "#ECECEC",

    padding: 10,
    color: "gray",
    borderRadius: 30,
  },
  reciever: {
    padding: 15,
    backgroundColor: "#ececec",
    borderRadius: 20,
    alignSelf: "flex-end",
    marginRight: 15,
    marginBottom: 20,
    maxWidth: "80%",
    position: "relative",
  },
  sender: {
    padding: 15,
    backgroundColor: "#2c6bed",
    borderRadius: 20,
    alignSelf: "flex-start",
    marginLeft: 15,
    maxWidth: "80%",
    marginBottom: 20,
    position: "relative",
  },
  recieverText: {

  },
  senderText: {
      color:"#fff"
  },
});

//make this component available to the app
export default ChatScreen;
