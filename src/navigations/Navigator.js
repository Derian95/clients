import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
//navegacion de autentificacion
import AuthNavigator from './auth-navigator'
//se usa el context creado en LoginProvider
import { useLogin } from '../context/LoginProvider'
//Pantalla de inicio de usuario
import AccountScreen from '../screens/AccountScreen'

const AppRoute = () => {
  //estado de logueo de la aplicacion
  const { isLoggedIn } = useLogin()
  return (
    <NavigationContainer>
      {isLoggedIn ? <AccountScreen /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default AppRoute
