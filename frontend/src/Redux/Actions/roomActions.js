import axios from 'axios';
import {
    ALL_ROOMS_REQUEST,
    ALL_ROOMS_SUCCESS,
    ALL_ROOMS_FAIL,
    ROOM_DETAILS_REQUEST,
    ROOM_DETAILS_SUCCESS,
    ROOM_DETAILS_FAIL,
    CLEAR_ERRORS

} from '../../Constants/roomConstants'

// get all rooms 
export const getRooms = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_ROOMS_REQUEST })
        const { data } = await axios.get('/api/v1/rooms')
        dispatch({
            type: ALL_ROOMS_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: ALL_ROOMS_FAIL,
            payload: err.response.data.message
        })
    }
}



// get room detail 
export const getRoomDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: ROOM_DETAILS_REQUEST })
        const { data } = await axios.get(`/api/v1/room/${id}`)
        dispatch({
            type: ROOM_DETAILS_SUCCESS,
            payload: data.room
        })

    }
    catch (err) {
        dispatch({
            type: ROOM_DETAILS_FAIL,
            payload: err.response.data.message
        })
    }
}


//clear errors
export const clearErrors = () => async (disptach) => {
    disptach({
        type: CLEAR_ERRORS
    })

}