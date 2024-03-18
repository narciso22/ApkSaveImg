import React,{ useContext } from 'react' 
import LoginComponent from '../components/LoginComponent'
import { GlobalContext } from '../context/GlobalProvider'
import LoginRequest from '../context/actions/LoginRequest'
import { LoginValues } from '../context/initialStates/InitialValues'

export default function Login() {
  const { authDispatch, authState:{error, loading} } = useContext(GlobalContext)

  const onSubmit = async (values) => {
    await LoginRequest(authDispatch)(values)
  }

  return (
    <LoginComponent
      onSubmit={onSubmit}
      loading={loading}
      initialValues = {LoginValues}
    />
  )
}