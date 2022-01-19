import {
    ALL_ROOMS_REQUEST,
    ALL_ROOMS_SUCCESS,
    ALL_ROOMS_FAIL,
    CLEAR_ERRORS,
    ROOM_DETAILS_REQUEST,
    ROOM_DETAILS_SUCCESS,
    ROOM_DETAILS_FAIL

} from '../../Constants/roomConstants'

export const roomRedux = (state = { room: [] }, action) => {
    switch (action.type) {
        case ALL_ROOMS_REQUEST:
            return {
                loading: true,
                rooms: []
            }
        case ALL_ROOMS_SUCCESS:
            return {
                loading: false,
                rooms: action.payload.rooms,
                roomsCount: action.payload.count
            }
        case ALL_ROOMS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {

                ...state,
                error: null
            }
        default:
            return state;
    }

}

export const roomDetailsRedux = (state = { room: {} }, action) => {
    switch (action.type) {

        case ROOM_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ROOM_DETAILS_SUCCESS:
            return {
                loading: false,
                room: action.payload
            }
        case ROOM_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {

                ...state,
                error: null
            }


        default:
            return state
    }
}