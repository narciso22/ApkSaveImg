const SaveImage = async (accessToken, idFolder ,image, name) => {
    // Leer el archivo de la imagen
    const response = await fetch(image);
    const blob = await response.blob();

    // Subir la imagen a la carpeta especificada en Microsoft Graph API
    const res = await fetch(`https://graph.microsoft.com/v1.0/me/drive/items/${idFolder}:/${name}.jpeg:/content`,
    {
        body: blob,
        method: 'PUT',
        headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'image/jpeg',
        },
    }).then(response=>{
        if(response.ok){
            console.log("OK")
        }else {
            console.log("NO OK")
        }
        return response
    }).catch(error=>{
        console.log(error)
    })    
    return res
}

export default SaveImage;
