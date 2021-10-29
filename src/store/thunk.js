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