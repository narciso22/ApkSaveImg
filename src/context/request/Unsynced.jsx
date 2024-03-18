import * as FileSystem from 'expo-file-system'

async function MoveImage(fileUri) {
   const folderUri = FileSystem.documentDirectory + 'unsyncedImages/'
  const newFileUri = folderUri + fileUri.split('/').pop()
  try {
    await FileSystem.moveAsync({
      from: fileUri,
      to: newFileUri,
    })
    console.log('Imagen movida con éxito')
  } catch (error) {
    console.error('Error al mover la imagen:', error)
  }

}

export default MoveImage