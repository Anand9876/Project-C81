import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from './screens/Feed';
import CreatePostScreen from './screens/CreatePost';
import { Ionicons } from '@expo/vector-icons';

const Tab =createBottomTabNavigator();

const BottomTabNavigator=()=>{
  return(
    <NavigationContainer>
    <Tab.Navigator screenOptions={({route})=>({
      tabBarIcon:({focused,color,size})=>{
        let iconName;
        if(route.name==='Feed'){
          iconName=focused
          ?'book':'book-outline';
        }else if(route.name==='CreatePost'){
          iconName=focused
          ?'create':'create-outline';
        }
        return <Ionicons name={iconName} size={size} color={color}></Ionicons>
      }
    })}
    tabBaroptions={{
      activeTintColor:'#1db954',
      inactiveTintColor:'black'
    }} >
<Tab.Screen name='Feed' component={FeedScreen} ></Tab.Screen>
<Tab.Screen name='CreatePost' component={CreatePostScreen} ></Tab.Screen>
    </Tab.Navigator>
    </NavigationContainer>
  )
}
export default BottomTabNavigator;

