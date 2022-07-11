import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function Card({ item }) {
  return (
    <TouchableOpacity onPress={() => console.log(item.id)}>
      <View>
        <Text>{item.id}</Text>
        <Text>{item.apellidoMaterno}</Text>
        <Text>{item.apellidoPaterno}</Text>
        <Text>{item.correo}</Text>
        <Text>{item.dni}</Text>
        <Text>{item.nombres}</Text>
        <Text>{item.telefono}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Card
