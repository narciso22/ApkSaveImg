import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native'
import { Icon } from "react-native-elements"

export default function AddMediaImage({image, cerrarImagen}) {
  return (
        <View className='flex justify-center items-center w-full rounded-lg px-2'>
            {image ? (
                <View className='relative rounded-lg w-full'>
                    <Image source={{ uri: image }} className='w-full h-[90%] my-2 rounded-lg '/>
                    <TouchableOpacity className=' bottom-[15%] right-2 bg-blue-500 p-2 justify-center rounded-lg absolute ' onPress={() =>cerrarImagen()}>
                        <Icon name='delete' color="#ff0000" type='material-community' size={28} />
                    </TouchableOpacity>
                </View>
            ):''}  
        </View>
  )
}