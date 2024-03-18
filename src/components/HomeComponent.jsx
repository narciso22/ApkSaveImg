import { View, TouchableOpacity, FlatList } from 'react-native'
import { Icon } from "react-native-elements"
import robot from '../pruebaData/robots'
import InfoContainer from './common/InfoContainer'
import {Picker} from '@react-native-picker/picker'
import AddCompany from '../views/AddCompany'

export default function HomeComponent({navigation, company, setSelectedValue, statusModal, modalVisible, CompanySchema, onSubmit}) {  
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
  }
  const sortedData = robot.sort((a, b) => parseDate(b.fecha) - parseDate(a.fecha))
  return (
    <View className='flex gap-y-2 m-1 p-1 w-[98%] h-full'>
      {/** Primera seccion de pantalla principal */}
      <View className='flex flex-row mt-0'>
        <View className='w-[70%] justify-center border rounded-lg'>
          <Picker
            selectedValue={company}
            style={{ color:'black'}}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Opción 1" value="option1" />
            <Picker.Item label="Opción 2" value="option2" />
            <Picker.Item label="Opción 3" value="option3" />
          </Picker>
        </View>
        <View className='w-[30%] justify-center items-end my-auto'>
          <TouchableOpacity className=' bg-[#76AF01] p-3 justify-end rounded-full items-center' onPress={()=>{statusModal()}}>
            <Icon name='plus-thick' color="#fff" type='material-community' size={32} />
          </TouchableOpacity>
        </View>
      </View>    
      {/** Añadir compañia desde formulario */}
      <AddCompany
        onSubmit={onSubmit}
        closeModal={statusModal}
        modalVisible={modalVisible}
        CompanySchema={CompanySchema}
      />
      {/** Segunda seccion de pantalla principal - Info Container*/}
      <View className='h-[70%] py-2 w-full  rounded-lg border border-gray-200 justify-center'>        
         <FlatList
					data={sortedData}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<InfoContainer item={item} navigation={navigation}/>
					)}
				/>        
      </View>
    </View>
  )
}