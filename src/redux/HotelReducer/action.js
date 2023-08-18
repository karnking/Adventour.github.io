import axios from "axios"
import { FILTER_HOTEL_ERROR, FILTER_HOTEL_REQUEST, FILTER_HOTEL_SUCESS, GET_HOTEL_ERROR, GET_HOTEL_REQUEST, GET_HOTEL_SUCESS } from "./actionType"
export const getHotel = () => async(dispatch) => {
    dispatch({type:GET_HOTEL_REQUEST})
    try{
        let response = await axios.get(`http://localhost:8080/hotels`)
        setTimeout(()=>{
            dispatch({type:GET_HOTEL_SUCESS,payload:response.data})
        },[1000])
    }catch(e){
        dispatch({type:GET_HOTEL_ERROR})
    }
}
export const filterHotel = (q='') => async(dispatch) => {
    dispatch({type:FILTER_HOTEL_REQUEST})
    try{
        let response = await axios.get(`http://localhost:8080/hotels?${q}`)
        setTimeout(()=>{
            dispatch({type:FILTER_HOTEL_SUCESS,payload:response.data})
        },[1000])
    }catch(e){
        dispatch({type:FILTER_HOTEL_ERROR})
    }
}


