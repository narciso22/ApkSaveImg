import envs from "../../config/index"
import { LOADING, LOGIN_SUCCESS, FAIL } from "../../constants/ActionType"

const envirioment = envs.DEV_BACKEND_URL

const LoginRequest = (dispatch) => async(values) => {
    dispatch({
		type: LOADING
	})
    console.log(envirioment)
    await fetch(`${envirioment}User/Autenticar`, {
		method: "POST",
		headers: {
            'Accept':'application/json',
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify(values),
	}).then(async response => {
        const data = await response.json()
        if(response.ok){
            dispatch({
                type: LOGIN_SUCCESS,
                data: data
            })
        } else {
            dispatch({
                type: FAIL,
                error: data
            })
        }
        console.log(data)
    }).catch(error =>{
        dispatch({
            type: FAIL,
            error: 'Ocurrio un error.'
	    })
        console.log(error)
    })
}

export default LoginRequest