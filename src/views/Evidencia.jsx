import * as ImagePicker from 'expo-image-picker'
import MoveImage from '../context/request/Unsynced'
import SaveImage from '../context/request/SaveImage'
import GetImages from '../context/request/GetImages'
import SaveImages from '../context/request/SaveImages'
import GetFolderId from '../context/request/GetFolderID'
import GetUnImages from '../context/request/GetUnImages'
import { GlobalContext } from '../context/GlobalProvider'
import EvidenciasComponent from '../components/EvidenciasComponent'
import React, { useState, useEffect,useCallback, useContext } from 'react'

export default function Evidencia({ route }) {  
  const wifi = useContext(GlobalContext)
  const [images, setImages] = useState([])
  const [selectedItems, setSelectedItems] = useState([])
  const { selectedItem } = route.params
  const [image, setImage] = useState()  
  const [vistaImg, setVistaImg]=useState(true)
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [idFolder, setIdFolder] = useState(null)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const accessToken = 'EwB4A8l6BAAUs5+HQn0N+h2FxWzLS31ZgQVuHsYAAXdsTI3eeOYoEmr8heDFfYGJPqKrzD9QQmdDQYfqdoAcvRe2kuagTivfHDKx8f99CVbE44UsWhs8BBEGjQX9DmbL+qG7voakeMkF+/5Equ0PaSAorE+HzdElC11Bu/RFwUkIIdLX0KkrqezfEOS6Qm4ri1Z+PdbO5Z/wao2l/lLbmJg1Y9FuqD7iI1dshdZcrE/JxCwzgH5W5eWgfOvipPJYcSELsUgJeH308evITkfqSV+neQ3HKKPts9M8c5tvOLEJP8ExFoKxFqBKp7MqN2jwajsT3n5sc5e1K4KSDfQgqBFK7PqSjOO77fKEE7KLw1/24BMgWiBDKxcF1vx/4YYDZgAACCkyzFz2VApcSAK29BnKM3o7HpsNv1dIyljMcEvFWd+1+3KI9Q3xVBf+ItW8tK43YRWbhtcphunbRQiSmwm6nCLM4z9Nbndg8L4naIHf1TU0MQqCMzjpPGx0rbLuwaH6UHTPasNoGX2cohy6swo/25sMdhbbRLzWC1pQFbN7n9loBd76MUdAt9Z4WoZk4WTN/7NQQRheEZYQs7tGbhNCW8/Ty5Wan3SdPPXCuXHCCzOq+j8l5iAjmT2dYIfvn9sgmit96/pK8iTyLECfpc4Lhpx+eBMDoW32+58Ciw/ImJUBBZyua/mFtIZDewzvZiDjglvr3AC0mK+Ys2lSz/VEaVPtQusYkr2J327tyxATJFeMXBlotAWyO3IeXkP8xuRzvzgPtV0XxLjmh9d6FKfG6HHIeaBm6Z8oCDW3YudG21H/xMrMgg4E2Vm4baAW7fz5hK52tUcO40RBC3H9gvR+Wm2afIZ/SGVrY6z5JkdrGWyGOtXLBHEWpuITdHu0AIKEmIP3kU+GQsy8fHYu0JqOY5Rt1x3R3P/OIK2+bT8eCDREXPsSbKOo855qxIbnHUaoL1GD/aEIx/mvij6TLlK4cp8lTAqntLOUPoI8vpHGE+gwRftl1c2gHML3uyxg5oOr/CbmSnNsP6+IzdY39JdGGPJ+e14oIjab8i+Ip47QC71CNxRXxqETsFz4Nt/z2SC0iTy7ZLQOaLhPYwr4cMRvyPaRIbjdaDi4bFL4noWtWussSj8CJ6nXa3LwqsbK1W7HT8eu739PWf76LJeg95l2HQTSW44C'
  const statusModal = () => {
    setModalVisible(!modalVisible)
  }
  /** Genera un nombre nuevo con informacion de fecha */
  function generarNombreImagen() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const año = fechaActual.getFullYear();
    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds(); 
    const nombreImagen = `imagen_${año}${mes}${dia}_${horas}${minutos}${segundos}`;
    return nombreImagen;
  }

  useEffect(() => {
    const nombreImagen = generarNombreImagen()
    setName(nombreImagen) 
    const loadData = async () => {   
      await GetFolderId(accessToken, folderName='New Folder').then(folderId =>{
        if(folderId){
          setIdFolder(folderId)
        }
      }).catch(err =>{
        console.log(err)
      })
    }      
    loadData()     
  },[])
  useEffect(() => {
    const loadData = async () => { 
      if(idFolder){
        await GetImages(accessToken,idFolder).then(images =>{
          setImages(images)
        }).catch(err=>{
          console.log(err)
        })
      }
    }
    loadData()
  }, [accessToken, idFolder])
  /** Refrescar lista de imagenes */
  const onRefresh = useCallback(() => {
    setIsRefreshing(true)
    const loadData = async () => { 
      if(idFolder){
        await GetImages(accessToken,idFolder).then(images =>{
          setImages(images)    
        }).catch(err=>{
          console.log(err)
        }).finally(()=>{          
          setIsRefreshing(false)
        })
      }
    }
    loadData()
  }, [accessToken, idFolder])  
 
  /** Tomar imagen con la camara del dispositivo */
  const takePick = async () => {
    // make sure that we have the permission
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === 'granted') {
       let result = await ImagePicker.launchCameraAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         quality: 1
       });
       if (!result.canceled) {
         const pickedImage = result.assets[0];
         setImage(pickedImage.uri);
       }
    }
  }
  /** Seleccionar imagen de galeria */
  const pickImage = async () => {
    // make sure that we have the permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 1,
      })

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const { uri } = result.assets[0]; // Access the first asset
        setImage(uri)
      }
    }
  }
  /** Quitar Imagen cargada */
  const cerrarImagen = () => {
    setImage(null)
  }  
  /**Enviar informacion e imagen a OneDrive */
  const onSubmitSave = async () =>{
    if(wifi){
        await SaveImage(accessToken, idFolder ,image, name).then(res=>{
        if(res.ok){
          setImage(null)
          const nombreImagen = generarNombreImagen()
          setName(nombreImagen)           
          setVisible(true)    
        }
      }).catch(error=>{
        console.error(error)
      })
    }else{
      await MoveImage(image).then(()=>{
        setImage()
        setVisible(true) 
      }).catch(()=>{
        console.log("no se pudo")
      })
    }
  }
  /**Selecciona y almacena imagenes a descargar en array */
  const onItemPress = (item) => {
    setSelectedItems((prevItems) => {
        if (prevItems.includes(item)) {
            return prevItems.filter((i) => i !== item);
        } else {
            return [...prevItems, item];
        }
    })
  }
  /**Funcion para descargar las imagenes seleccionadas */
  async function downloadImages() {
    if(vistaImg){
      const name = 'Download/'
      await SaveImages(selectedItems, name).then(([{status}])=>{
        if(status===200){
          setSelectedItems([])
          setVisible(true)          
        }
      }).catch(error=>{
        console.log(error)
      })  
    } else {
      
    }
  }
  /**  */
  const showDialog = () => setVisible(!visible)
  /** Cambia las imagenes mostradas en vista oneDrive/No sincronizadas */
  const setImgVista = useCallback(async (bool) => {
    if (bool != vistaImg) {
      setSelectedItems([])
      if (bool) {
        setVistaImg(bool)
        await GetImages(accessToken, idFolder).then(images => {
          setImages(images)
        }).catch(err => {
          console.log(err)
        })
      }
      if (!bool) {
        await GetUnImages().then(res => {
          setImages(res)
        })
        setVistaImg(bool)
      }
    }
  }, [vistaImg, accessToken, idFolder])
  
  return (
    <EvidenciasComponent
      setVistaImg={setImgVista}
      vistaImg={vistaImg}
      name={name}
      image={image}
      images={images}
      setName={setName}
      visible={visible}
      takeImage={takePick}
      onRefresh={onRefresh}
      pickImage={pickImage}
      showDialog={showDialog}
      saveImage={onSubmitSave}
      onItemPress={onItemPress}
      statusModal={statusModal}
      isRefreshing={isRefreshing}
      selectedItem={selectedItem}
      cerrarImagen={cerrarImagen}
      modalVisible={modalVisible}
      seleccionado={selectedItems}
      descargarImg={downloadImages}
    />
  )
}