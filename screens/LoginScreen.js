//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet,KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useEffect } from "react";
import User from "./user.json"
// create a component
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const excuteSignin=()=>{
      alert("sign in")
  }
  
 
  return (
    <KeyboardAvoidingView  behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="email"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <Button title="Login" containerStyle={styles.button} onPress={excuteSignin}/>
      <Button title="Register" onPress={()=>{
          navigation.navigate("Register")
      }} containerStyle={styles.button} type="outline" />
      <View style={{height:100}}/>
    </KeyboardAvoidingView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding:10,
    alignItems: "center",
  },
  inputContainer: {
    alignContent: "center",
    width:300
  },
  button: {
      width:200,
      marginTop:10
  },
});

//make this component available to the app
export default LoginScreen;
