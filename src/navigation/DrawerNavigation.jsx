import SideMenu from '../components/common/SideMenu'
import StackHome from './StackHome'
import { createDrawerNavigator } from '@react-navigation/drawer'


function DrawerNavigation(){
  function getDrawerContent({navigation}){
  return <SideMenu navigation={navigation}/> 
}
  
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator screenOptions={{headerShown: false, drawerStyle:{backgroundColor:'transparent', minHeight:'100%'}}} 
      drawerContent={(props) => getDrawerContent(props)}>
      <Drawer.Screen name="Inicio" component={StackHome} ></Drawer.Screen>
    </Drawer.Navigator>
  )
}



export default DrawerNavigation
