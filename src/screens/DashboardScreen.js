import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { logOut } from '../api/uptApi'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import AccountScreen from './AccountScreen';
import LoginScreen from './LoginScreen';
import NavigatorAuth from '../navigations/auth-navigator'

const Stack = createNativeStackNavigator();

export default function DashboardScreen() {
  
  return (

   <Text>ddd</Text>

   
  )
}
