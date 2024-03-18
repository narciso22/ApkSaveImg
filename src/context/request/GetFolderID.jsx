import axios from 'axios'

const GetFolderId = async (accessToken, folderName) => {
  try {
    // Obtén la lista de carpetas en la raíz del usuario
    const response = await axios.get(
      'https://graph.microsoft.com/v1.0/me/drive/root/children',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    // Busca el folderId de la carpeta específica por nombre
    const folder = response.data.value.find((item) => item.name === folderName);

    if (folder) {
      const folderId = folder.id      
      return folderId
    } else {
      console.log(`No se encontró la carpeta "${folderName}"`)
      return null
    }
  } catch (error) {
    console.error('Error al obtener el folderId:', error)
    return null
  }
};

export default GetFolderId