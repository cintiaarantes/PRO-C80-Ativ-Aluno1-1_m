import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        
        
        
        tabBarOptions = {{
          activeTintColor: "white",
          inactiveTintColor: "black",
          labelPosition: "beside-icon",
          labelStyle: {
            fontSize: 20
          },
          tabStyle: {
            borderWidth: 2,
            borderRadius: 30,
            marginTop: 25,
            marginLeft: 10,
            marginRight: 10,
            //backgroundColor: "gray"
          },
          style: {
            height: 100,
            backgroundColor: "#5653d4",
            borderTopWidth: 0,
          }
        }}    
        >
          <Tab.Screen name="Transação" component={TransactionScreen} />
          <Tab.Screen name="Pesquisa" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
