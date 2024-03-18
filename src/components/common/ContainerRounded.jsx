import React from 'react'
import { View,  ScrollView } from 'react-native'
import { StatusBar } from "expo-status-bar"
import { useTheme } from '@react-navigation/native'

const ContainerRounded = ({children}) => {
  const { colors } = useTheme()
  return (
    <ScrollView style={{backgroundColor:colors.background }} className="rounded-r-lg min-h-screen">
      <View className='flex container p-5'>
        {children}
      </View>
      <StatusBar barStyle={colors.text}></StatusBar>		
    </ScrollView>
  )
}

export default ContainerRounded