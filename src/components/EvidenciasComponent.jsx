import { View, Text, TouchableOpacity, TextInput, Image, FlatList, RefreshControl, Pressable  } from "react-native"
import { Icon } from "react-native-elements"    
import AddMediaImage from "../views/AddMediaImage"
import Alerta from "./common/Alerta"

export default function EvidenciasComponent({setVistaImg,vistaImg,setName,visible,showDialog,descargarImg,seleccionado,onItemPress,onRefresh,isRefreshing,images,name,image, cerrarImagen, takeImage, saveImage, pickImage, selectedItem}){
    
    return(
        <View className='flex m-1 p-1 w-[98%] h-full flex-col gap-y-2 relative'>            
            <Alerta visible={visible} showDialog={showDialog} />
            <View className='border rounded-lg h-[25%] p-1'>
                <Text>Modelo:{selectedItem.modelo}</Text>
                <Text>Fecha: {selectedItem.fecha}</Text>
                <Text>Nombre: {selectedItem.nombre}</Text>
                <Text>Descripción: {selectedItem.descripcion}</Text>
            </View>
            {/** Lista de imagenes */}
            <View className='relative rounded-lg h-[60%]  w-full'>
                {image ? (
                    <Text className='text-center text-white bg-blue-800 font-semibold text-xl rounded-xl'>
                        Imagen seleccionada
                    </Text>) : (
                        <View className='flex flex-row w-full border font-semibold text-xl rounded-t-lg mb-1'>
                            <TouchableOpacity onPress={()=>{setVistaImg(true)}} className='w-[50%] py-1 pl-1'>
                                <Text className={`text-center text-lg ${vistaImg ? 'font-semibold  bg-blue-200 rounded-tl' : '' }`}>OneDrive</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{setVistaImg(false)}} className='w-[50%] py-1 pr-1'>
                                <Text className={`text-center text-lg  ${!vistaImg ? 'font-semibold bg-blue-200 rounded-tr ' :'' }`}>Sin Sincronizar</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                {!image ? (
                    <FlatList
                        data={images}
                        keyExtractor={( index ) => index.toString()}
                        renderItem={({ item }) => (
                            <View className={`flex-row  items-center justify-center w-1/3 mb-4 `}>
                                <TouchableOpacity className = {`w-3/4 relative`} onPress={() => onItemPress(item)}>
                                    <Image source={{ uri: item }} className={`w-full rounded-lg aspect-square`} />  
                                    {seleccionado.includes(item) ? 
                                        (
                                            <Text className='absolute top-2 right-2'>
                                                <Icon name='check-circle' color="#1cea2f" type='material-community' size={32} />
                                            </Text>
                                        ) : 
                                        (
                                            ''
                                        )
                                    }                                       
                                </TouchableOpacity>                   
                            </View>
                        )}
                        numColumns={3} 
                        refreshControl={
                            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
                        }
                    /> 
                ):(
                    <AddMediaImage
                        image={image}
                        cerrarImagen={cerrarImagen}
                    />
                )}
                {seleccionado[0] ? (
                    <View className='flex flex-row justify-around absolute w-full -bottom-3'>
                    <Pressable
						className={` bg-[#962721] p-2 rounded border border-white`}
						onPress={() => {console.log("E")}}
					>
                        <View className='flex-row items-center'>
                            <Icon name='trash-can-outline' color="#fff" type='material-community' size={24} />
                            <Text className={`text-white font-bold px-2`}>
                                Eliminar
                            </Text>
                        </View>
					</Pressable>
                    <Pressable
						className={`bg-green-500 p-2 rounded`}
						onPress={() => descargarImg()}
					>
						<View className='flex-row items-center'>
                            <Icon name='download-outline' color="#fff" type='material-community' size={24} />
                            <Text className={`text-white font-bold px-2`}>
                                {vistaImg ? 'Descargar' : 'Sincronizar'}
                            </Text>
                        </View>
					</Pressable>
                </View>
                ):''}          
            </View>
            {/** Envio y cambio de datos de imagen */}
            <View className='flex-1 flex-row content-end align-bottom w-full gap-x-2'>
                <View className='flex-1 flex-row border p-2 justify-between rounded-2xl mt-auto' >
                    <TextInput 
                        className='max-w-[70%]' 
                        value={name+'.jpeg'}
                        onChangeText={setName} 
                        placeholder="Elige o toma una foto"/>
                    <View className='flex flex-row gap-x-3'>                        
                        {/**Seleccionar foto de galeria */}
                        <TouchableOpacity onPress={() =>pickImage()}>
                            <Icon name='folder-multiple-image' color="#000" type='material-community' size={32} />
                        </TouchableOpacity>
                        {/**Seleccionar foto de galeria */}
                        <TouchableOpacity onPress={() =>takeImage()}>
                            <Icon name='camera' color="#000" type='material-community' size={32} />
                        </TouchableOpacity>
                    </View>
                </View>
                {image&&(
                    <TouchableOpacity className='bg-blue-500 p-2 justify-center rounded-full mt-auto' onPress={() =>saveImage()}>
                    <Icon name='send' color="#fff" type='material-community' size={32} />
                </TouchableOpacity>
                )}
            </View>          
        </View>
    )
}