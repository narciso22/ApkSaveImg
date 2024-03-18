import React, { useContext } from 'react'
import { View } from 'react-native'
import { Icon } from "react-native-elements"
import { GlobalContext } from '../../context/GlobalProvider'

function NetworkScanner() {
    // Usar el contexto
    const wifi = useContext(GlobalContext)
    
    return (
        <View style={{ marginRight: 10 }}>
            <Icon name={wifi ? 'wifi-check' : 'wifi-off'} color={wifi ? '#37B03C' : '#D11212'} type='material-community' size={32} />
        </View>
    )
}

export default NetworkScanner
