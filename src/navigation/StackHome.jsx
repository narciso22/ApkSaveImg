import React from 'react'
import Home from '../views/Home'
import Evidencia from '../views/Evidencia'
import { useTheme } from '@react-navigation/native'
import NetworkScanner from '../components/common/NetworkScanner.jsx'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigationDrawerStructure from '../components/common/NavigationDrawerStructure'

function StackHome (){
    const { colors } = useTheme()   
    const StackNavigation = createNativeStackNavigator()
    
  return (
    <StackNavigation.Navigator initialRouteName="Home">
        <StackNavigation.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerTitle: "Inicio",
            headerTitleAlign:'center',
            headerLeft:()=> <NavigationDrawerStructure/>,
            headerRight: () => (<NetworkScanner/>),
            headerStyle:{
              backgroundColor: colors.background
            },
            headerTintColor: colors.text,
            headerTitleStyle:{
              fontWeight: 'bold'
            }
          }}
        /> 
        <StackNavigation.Screen 
          name={"Evidencias"} 
          component={Evidencia} 
          options={{
            headerTitle: 'Evidencias',
            headerTitleAlign:'center',
            headerRight: () => (<NetworkScanner/>),
            headerStyle:{
              backgroundColor: colors.background
            },
            headerTintColor: colors.text,
            headerTitleStyle:{
              fontWeight: 'bold'
            }
          }} 
        /> 
    </StackNavigation.Navigator>
  )
}

export default StackHome
