//import liraries
import React, { Component } from "react";
import { View,  StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, Text,Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useLayoutEffect } from "react";
import User from "./user.json"
// create a component
const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [password, setPassword] = useState("");
  const excuteSignin = () => {
    alert("excuteSignin");
  };
  const register = () => {
  navigation.navigate("Home")
  };

  useLayoutEffect(()=>{
      navigation.setOptions({
          headerBackTitle:"Back to login",
          animationEnabled:false
      })
  },[navigation])
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h2 style={{ marginBottom: 50 }}>
        Create Signal account{" "}
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          type="text"
          autoFocus
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
        placeholder="Profile Picture URL (optional)"
        type="text"
        value={imageUrl}
        onChangeText={(text) => setImageUrl(text)}
        onSubmitEditing={register}
      />
      </View>
      <Button  raised onPress={register} title="Register" containerStyle={styles.button}/>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 10,
    alignItems: "center",
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
export default Register;
