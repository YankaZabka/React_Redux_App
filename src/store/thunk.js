import axios from "axios";

export const getData = (callback, pageName) => {
    return async (dispatch) => {
        const response = await callback()
        return dispatch({
            type: `SET_${pageName.toUpperCase()}S`, payload: response.data.map(item => {
                item.color = '#999999'
                return item
            })
        })

    }
}

export const uploadPost = (data, pageName) => {
    return async (dispatch) => {
        const response = await axios.post(`https://jsonplaceholder.typicode.com/${pageName}s`, data)
        return dispatch({type: `SET_ADD_${pageName.toUpperCase()}`, payload: response.data})
    }
}
