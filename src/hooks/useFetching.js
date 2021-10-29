import {useDispatch} from "react-redux";
import {getData} from "../store/thunk";

export const useFetching = (callback, pageName) => {
    const dispatch = useDispatch()

    return async () => {
        try {
            dispatch({type: `SET_IS_${pageName.toUpperCase()}S_LOADING`, payload: true})
            await dispatch(getData(callback, pageName))
        } catch (e) {
            dispatch({type: `SET_ERROR`, payload: e.message})
        } finally {
            dispatch({type: `SET_IS_${pageName.toUpperCase()}S_LOADING`, payload: false})
        }
    }
}