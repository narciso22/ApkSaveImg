import React,{useContext} from 'react'
import { useColorScheme } from 'react-native'
import AuthNavigation from './AuthNavigation'
import DrawerNavigation from './DrawerNavigation'
import { GlobalContext } from '../context/GlobalProvider'
import { NavigationContainer, DefaultTheme, DarkTheme  } from '@react-navigation/native'

export default function AppNavContainer() {
  const scheme = useColorScheme()
  const { authState: {isLoggedIn}} = useContext(GlobalContext)
  return (
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      {isLoggedIn ? <DrawerNavigation/> : <AuthNavigation/>}
      </NavigationContainer>
  )
}
