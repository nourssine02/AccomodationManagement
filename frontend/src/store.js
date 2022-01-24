import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'



import { roomRedux, roomDetailsRedux } from './Redux/Reducers/roomRedux'
import { authReducer } from './Redux/Reducers/userRedux';


const reducer = combineReducers({
    rooms: roomRedux,
    roomDetails: roomDetailsRedux,
    auth: authReducer
}) 

let initialState = {}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;