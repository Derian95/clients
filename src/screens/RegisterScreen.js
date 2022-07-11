import React from 'react'
import { registerUser } from '../api/uptApi'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function RegisterScreen() {

  const navigation = useNavigation()

  const register = async (name, password) => {
    const response = await registerUser(name, password)
    console.log(response)
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

      register(name, password)
      
      setTimeout(() => {
        navigation.navigate('Login')
      }, 2000);
    },
  })

  return (
    <View style={styles.container}>
      <Text>Registro</Text>
      <TextInput
        placeholder='name'
        onChangeText={formik.handleChange('name')}
        onBlur={formik.handleBlur('name')}
        value={formik.values.name}
      />
      {formik.errors.name ? (
        <Text style={{ color: 'red', fontSize: 10 }}>{formik.errors.name}</Text>
      ) : null}
      <TextInput
        placeholder='password'
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        value={formik.values.password}
      />
      {formik.errors.password ? (
        <Text style={{ color: 'red', fontSize: 10 }}>
          {formik.errors.password}
        </Text>
      ) : null}
      <TouchableOpacity onPress={formik.handleSubmit}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
})

