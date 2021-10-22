import { urlProducts } from '../../api'
import axios from 'axios'

export const removeProduct = () => {
    return ({ type: "REMOVE_PRODUCT" })
}

export const readProduct = (id) => {
    return (dispatch, getState) => {
        axios.get(urlProducts + '/' + id)
            .then(res => {
                dispatch({ type: "READ_PRODUCT", payload: res.data })
            })
            .catch(err => console.log(err))
    }
}