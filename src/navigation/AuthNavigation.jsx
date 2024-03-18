import React from 'react'
import Login from '../views/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function AuthNavigation() {
  const AuthStack = createNativeStackNavigator()
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}} >
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  )
}
