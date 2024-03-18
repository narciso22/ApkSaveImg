import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import ContainerRounded from './ContainerRounded'
import { View, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native'

export default function SideMenu({navigation}) {
	const { colors } = useTheme()

	const menuItems = [
		{icon:<FontAwesome name="home" size={24} color={colors.text} />, name:"Inicio", onPress:() =>navigation.navigate("Home")}
	]

	return (
		<SafeAreaView className="rounded-r-full h-[100%]">
			<ContainerRounded>
				<Image
					source={require("../../../assets/icon.png")}
					className="h-[105px] w-48 self-center mt-12"
				/>
				<View className="flex mt-[10%]">
					{menuItems.map(
						({name, icon, onPress})=><TouchableOpacity key={name} onPress={onPress} className="flex-row gap-x-3 rounded-r-lg">
							<Text>{icon}</Text>
							<Text className="text-lg font-bold text-black dark:text-white">{name}</Text>
						</TouchableOpacity>)
					}
				</View>
			</ContainerRounded>
		</SafeAreaView>
	)
}
