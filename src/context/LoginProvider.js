import React, { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

//se crea context de inicio de sesion
const LoginContext = createContext()

//children son los componentes hijos que se podra inyectar al componente LoginProvider
export default function LoginProvider({ children }) {
  //Estado inicial de logueo
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //aun no se usa
  const [token, setToken] = useState('')
  const [user, setUser] = useState('')

  //Funcion que detecta si existe un token de autentificacion ennuestro asyncStorage
  const getToken = async () => {
    const response = await AsyncStorage.getItem('token')
    if (response != null) {
      setIsLoggedIn(true)
      setToken(response)
    }
  }
  //Funcion que obtiene el nombre del usuario del AsynStorage
  const getUser = async () => {
    const response = await AsyncStorage.getItem('user')
    if (response != null) {
      setUser(response)
    }
  }
  getToken()
  getUser()

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, token, user }}>
      {children}
    </LoginContext.Provider>
  )
}

export const useLogin = () => useContext(LoginContext)
