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

// export const updatePost = ({postId, data}) => {
//     return async (dispatch) => {
//         const response = await axios.patch()
//     }
// }

// export const uploadPost = ({data}) => {
//     return async (dispatch) => {
//
//     }
// }
