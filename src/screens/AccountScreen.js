import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import { logOut } from '../api/uptApi'
import { useLogin } from '../context/LoginProvider'
import { getClients, getClient } from '../api/uptApi'
import { height, witdh } from '../utils/Dimens'
import Card from '../components/Card'

const AccountScreen = () => {
  
  const { setIsLoggedIn, token, user } = useLogin()
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  const outUser = () => {
    logOut()
    setIsLoggedIn(false)
  }

  const fetchData = async (token) => {
    const response = await getClients(token)
    setData(response.data.result)
  }

  const getOneClient = async (token, id) => {
    const response = await getClient(token, id)
    setData([response.data.result])
  }

  const renderItem = ({ item }) => (
    <Card item={item}/>
)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        paddingVertical: 50,
        width: witdh,
      }}
    >
      <TextInput placeholder='buscar' onChangeText={setSearch} value={search} />
      <TouchableOpacity
        onPress={() => {
          getOneClient(token, search)
        }}
      >
        <Text>Buscar</Text>
      </TouchableOpacity>

      <Text>Wellcome to Dashboard,{user}</Text>
      <TouchableOpacity
        onPress={() => {
          outUser()
        }}
      >
        <Text>Log out</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          fetchData(token)
        }}
      >
        <Text>Get Data</Text>
      </TouchableOpacity>

     
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
    </View>
  )
}

export default AccountScreen
