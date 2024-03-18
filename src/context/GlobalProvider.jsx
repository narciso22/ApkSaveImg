import React, { useEffect, useState, createContext, useReducer } from 'react'
import * as Network from 'expo-network'
import auth from './reducers/auth'
import authInitState from './initialStates/authState'

export const GlobalContext = createContext({})

function GlobalProvider({ children }) {
    const [wifi, setWifi] = useState(false)
    const [authState, authDispatch] = useReducer(auth, authInitState)
    
    useEffect(() => {
        const scanNetwork = async () => {
            await Network.getNetworkStateAsync().then(({type})=>{
                if(type === 'WIFI'){
                    setWifi(true)
                }else{
                    setWifi(false)
                }
            }).catch(error =>{
                console.error('Error al escanear la red:', error)
            })
        }
        const intervalId = setInterval(scanNetwork, 5000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <GlobalContext.Provider value={{authState, authDispatch, wifi}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider