import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function InfoContainer({item, navigation}) {
  const itemStyle = 'bg-green-200 px-1 rounded'
  return (
      <TouchableOpacity onPress={() => navigation.navigate('Evidencias', { selectedItem: item })} 
      className=" w-[95%] rounded-lg gap-1 bg-gray-200 mt-2 mx-auto p-2">
		    <View className='flex flex-row justify-between'>
            <Text className={`px-1 bg-blue-600 text-white rounded`}>{'Modelo: '+item.modelo}</Text>
		        <Text className={`${itemStyle}`}>{item.fecha}</Text>
        </View>
        <Text className={`${itemStyle}`}>{('Autor: '+item.nombre)}</Text>
        <Text className={`${itemStyle}`}>{"Descripcion: "+item.descripcion}</Text>
		</TouchableOpacity>
  )
}