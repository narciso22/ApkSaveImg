import React, { useEffect, useState } from 'react';
import { Image, ScrollView } from 'react-native';
import * as FileSystem from 'expo-file-system';

async function GetUnImages() { 
      const folderUri = FileSystem.documentDirectory + 'unsyncedImages/';
      const imageNames = await FileSystem.readDirectoryAsync(folderUri)
      const imageUris = imageNames.map(name => folderUri + name)
      return imageUris
    
}

export default GetUnImages