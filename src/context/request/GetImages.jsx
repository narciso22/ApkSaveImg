const GetImages = async (accessToken, idFolder) => {
  try {
    const response = await fetch(`https://graph.microsoft.com/v1.0/me/drive/items/${idFolder}/children`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    if (response.ok) {
      const data = await response.json();
      const imageUrls = [];

      for (const file of data.value) {
        if (file.file && file.file.mimeType && file.file.mimeType.startsWith("image/")) {
          const downloadUrl = file["@microsoft.graph.downloadUrl"];
          imageUrls.push(downloadUrl); // Almacena la URL de la imagen
        }
      }

      return imageUrls; // Devuelve el array de URLs de imágenes
    } else {
      throw new Error("Error al obtener imágenes");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }  
};

export default GetImages;
