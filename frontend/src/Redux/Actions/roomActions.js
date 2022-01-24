import axios from 'axios';
import {
    ALL_ROOMS_REQUEST,
    ALL_ROOMS_SUCCESS,
    ALL_ROOMS_FAIL,
    ROOM_DETAILS_REQUEST,
    ROOM_DETAILS_SUCCESS,
    ROOM_DETAILS_FAIL,
    CLEAR_ERRORS

} from '../Constants/roomConstants'
export const ADD_COMMENT = "ADD_COMMENT";

// get all rooms 
export const getRooms = (keyword = '', price, roomsType, capacity = 1, ratings = 0) => async (dispatch) => {
    try {
        dispatch({ type: ALL_ROOMS_REQUEST })

        let link = `/api/v1/rooms?keyword=${keyword}&price[lte]=${price[1]}&price[gte]=${price[0]}&capacity[gte]=${capacity}&ratings[gte]=${ratings}`

        if (roomsType) {
            link = `/api/v1/rooms?keyword=${keyword}&price[lte]=${price[1]}&price[gte]=${price[0]}&roomsType=${roomsType}&capacity[gte]=${capacity}&ratings[gte]=${ratings}`


        }

        const { data } = await axios.get(link)
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

// export const addComment = (roomId, commenterId, text, commenterPseudo) => {
//     return (dispatch) => {
//         return axios({
//             method: "put",
//             url: `/api/v1/review`,
//             data: { commenterId, text, commenterPseudo },
//         })
//             .then((res) => {
//                 dispatch({ type: ADD_COMMENT, payload: { roomId } });
//             })
//             .catch((err) => console.log(err));
//     };
// };
















//clear errors
export const clearErrors = () => async (disptach) => {
    disptach({
        type: CLEAR_ERRORS
    })

}