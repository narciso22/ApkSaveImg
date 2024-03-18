import AppNavContainer from './src/navigation'
import 'react-native-gesture-handler'
import GlobalProvider from './src/context/GlobalProvider'

export default function App() {
  return (
    <GlobalProvider>
      <AppNavContainer/>
    </GlobalProvider>
  )
}