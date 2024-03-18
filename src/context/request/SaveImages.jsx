import * as FileSystem from 'expo-file-system'
import * as MediaLibrary from 'expo-media-library'

async function SaveImages(selectedItems, name) {
  // Solicita permisos de lectura y escritura
  const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('Necesitas otorgar permisos para guardar imágenes en tu dispositivo.');      
  }

  let results = []

  // Crear una carpeta específica para guardar las imágenes
  const folderUri = FileSystem.documentDirectory + name
  const folder = await FileSystem.getInfoAsync(folderUri)
  if (!folder.exists) {
    await FileSystem.makeDirectoryAsync(folderUri, { intermediates: true });
  }

  // Descarga y guarda cada imagen
  for (let i = 0; i < selectedItems.length; i++) {
    const imageUrl = selectedItems[i]
    const fileUri = folderUri + `image${i}.jpg`
    // Descarga la imagen a la ubicación local
    const result = await FileSystem.downloadAsync(imageUrl, fileUri).then(response=>{ 
      return response
    }).catch(error=>{
      console.log(error)
    })

    // Guarda la imagen en el carrete de la cámara
    await MediaLibrary.saveToLibraryAsync(result.uri).then(()=>{
      console.log("Saved")
    }).catch(err=>{
      console.log(err)
    })
    results.push(result) // Añade el resultado al array
  }

  return results // Devuelve todos los resultados después del bucle
}

export default SaveImages;
