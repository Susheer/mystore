//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// create a component
const CustomeListItem = ({id,chatName,enterChat,profileDp,onClickList}) => {
  return (
    <ListItem onPress={()=>{
      onClickList(id)
    }}>
      <Avatar
      rounded
      source={{uri:profileDp}}
      />
      <ListItem.Content>
      <ListItem.Title>
      {chatName}
      </ListItem.Title>
      <ListItem.Subtitle
      numberOfLines={1}
      ellipsizeMode="tail"
      >
      {enterChat}
      </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

// define your styles
const styles = StyleSheet.create({
  
});

//make this component available to the app
export default CustomeListItem;
