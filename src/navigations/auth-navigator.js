import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//pantallas para la navegacion de autentificacion
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

//createNativeStackNavigator sirve para crear la navegacion entre pantallas
const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
