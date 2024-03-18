import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Alerta({showDialog, visible}) {
  return (
    <>
    {visible ? (
        <View className='absolute top-[25%] z-30 left-0 right-0 bg-blue-200'>
            <Text>Imagen Guardada correctamente</Text>
            <Button title='Cerrar'  onPress={showDialog}/>
        </View>
    ):''}
    </>
    // <Provider>
    //     <Portal>
    //     <Dialog visible={visible} onDismiss={showDialog}>
    //         <Dialog.Title>Alerta</Dialog.Title>
    //         <Dialog.Content>
    //         <Text>Esta es una alerta personalizada.</Text>
    //         </Dialog.Content>
    //         <Dialog.Actions>
    //         <Button onPress={showDialog}>Aceptar</Button>
    //         </Dialog.Actions>
    //     </Dialog>
    //     </Portal>
    // </Provider>
  );
}
