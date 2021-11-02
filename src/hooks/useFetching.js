import {useDispatch, useSelector} from "react-redux";
import {getData} from "../store/thunk";
import {useEffect} from "react";
import axios from "axios";

export const useFetching = (pageName) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state[`${pageName.toLowerCase()}s`][`${pageName.toLowerCase()}s`])
    console.log("USE FETCHING!")

    const loadItems = async () => {
        try {
            dispatch({type: `SET_IS_${pageName.toUpperCase()}S_LOADING`, payload: true})
            await dispatch(getData(async () => await axios.get(`https://jsonplaceholder.typicode.com/${pageName}s`), pageName))
        } catch (e) {
            dispatch({type: `SET_ERROR`, payload: e.message})
        } finally {
            dispatch({type: `SET_IS_${pageName.toUpperCase()}S_LOADING`, payload: false})
        }
    }

    useEffect(() => {
        if (!items.length) {
            console.log('LOADiTEMS!')
            void loadItems()
        }
    }, [])

    return {items}
}