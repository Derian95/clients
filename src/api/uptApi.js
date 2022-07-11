import axios from 'axios'
import config from '../../config'
import AsyncStorage from '@react-native-async-storage/async-storage'

const API = config.API_BASE

export const getClients = async (token) => {
  try {
    const response = await axios.get(API + '/Clients', {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response
  } catch (error) {
    return error
  }
}

export const getClient = async (token,id) => {
  try {
    const response = await axios.get(API + '/Clients/'+id, {
      headers: { Authorization: `Bearer ${token}` },
    })
    console.log(API + '/Clients/'+id)
    return response
  } catch (error) {
    return error
  }
}

export const registerUser = async (user, pass) => {
  try {
    const response = await axios.post(`${API}/Users/Register`, {
      userName: user,
      password: pass,
    })
    return response
  } catch (error) {
    return error
  }
}

export const loginUser = async (user, pass) => {
  try {
    const response = await axios.post(`${API}/Users/Login`, {
      userName: user,
      password: pass,
    })
    await AsyncStorage.setItem('token', response.data.result.token)
    await AsyncStorage.setItem('user', response.data.result.userName)
    return response
  } catch (error) {
    return error.response.data.displayMessage
  }
}

export const logOut = async () => {
  await AsyncStorage.removeItem('token')
  await AsyncStorage.setItem('user', '')
}
