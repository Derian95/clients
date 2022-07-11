import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
  Image
} from 'react-native'
import { loginUser } from '../api/uptApi'
import { useNavigation } from '@react-navigation/native'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useLogin } from '../context/LoginProvider'
import img from '../assets/Group.png'
import { witdh, height } from '../utils/Dimens'
import { BlurView } from 'expo-blur'

const uri= '../assets/Group.png'
const LoginScreen = () => {
  //estados iniciales
  const { setIsLoggedIn } = useLogin()

  //navegacion
  const navigation = useNavigation()

  //funcion de login
  const login = async (name, password) => {
    const response = await loginUser(name, password)
    if (response.data) {
      setTimeout(() => {
        navigation.navigate('DashboardScreen')
      }, 2000)
    } else {
      console.log(response)
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('El nombre no puede ir vacio'),
      password: Yup.string().required('La contraseña no puede ir vacia'),
    }),
    onSubmit: async (values) => {
      const { name, password } = values

      const response = await loginUser(name, password)
      console.log(response)
      if (response.data) {
        setIsLoggedIn(true)
      } else {
        console.log(response)
      }
    },
  })

  //pantalla
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Group.png')} resizeMode='cover' style={[styles.image, StyleSheet.absoluteFill]}/>
        <BlurView style={styles.contain} intensity={100} tint={'default'}>
          <Text>Login Screen</Text>
          <TextInput
            placeholder='name'
            placeholderTextColor={'white'}
            onChangeText={formik.handleChange('name')}
            onBlur={formik.handleBlur('name')}
            value={formik.values.name}
            style={styles.input}

          />
          {formik.errors.name ? (
            <Text style={{ color: 'red', fontSize: 10 }}>
              {formik.errors.name}
            </Text>
          ) : null}
          <TextInput
            placeholder='password'
            placeholderTextColor={'white'}
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            value={formik.values.password}
            style={styles.input}
                        
          />
          {formik.errors.password ? (
            <Text style={{ color: 'red', fontSize: 10 }}>
              {formik.errors.password}
            </Text>
          ) : null}
          <TouchableOpacity onPress={formik.handleSubmit}>
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text>Crear cuenta</Text>
          </TouchableOpacity>
        </BlurView>
    </View>
  ) 
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#165873',
  },
  contain:{
    height:height/1.8,
    width:witdh/1.2,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'


  },
  btn: {
    backgroundColor: 'blue',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    width: witdh,
  },
  input:{
    padding:10,
    height:30,
    color:'white',
    marginBottom:10,
    borderColor:'white',
    borderRadius:2,
    borderWidth:1,
    
    
    
  }
})
