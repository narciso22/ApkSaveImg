import { useCallback } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useTheme, useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity } from 'react-native'

function NavigationDrawerStructure() {  
  const navigation = useNavigation()
  const toggleDrawer = useCallback(() => navigation.toggleDrawer(), [navigation])
  const { colors } = useTheme()

  return (
    <View className="flex-row">
      <TouchableOpacity onPress={toggleDrawer}>
        <FontAwesome name="bars" size={28} color={colors.text}/>
      </TouchableOpacity>
    </View>
  )
}

export default NavigationDrawerStructure
