import { DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env'

const devEnviriomentVariables = {
    DEV_BACKEND_URL
}

const prodEnviriomentVariables = {
    PROD_BACKEND_URL
}

export default __DEV__ ? devEnviriomentVariables : prodEnviriomentVariables