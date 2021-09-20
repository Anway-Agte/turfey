import {combineReducers} from 'redux' ; 
import { ADD_SLOT, CLEAR_SLOT, LOGOUT, REMOVE_SLOT, RESET_DATE, SET_DATE, SET_TURF } from '../actions/action-types';

const merge = (prev,next) =>(Object.assign({} , prev , next)) 

const userReducer = (state = {},action) => {
    switch(action.type){
        
        case LOGOUT: {
            return {}
        }
        default : {
            return state
        }
    }
}

const slotReducer = (state = [],action) => {
    switch(action.type){
        case ADD_SLOT : {
            return [...state ,action.payload].sort() ; 
        }
        case REMOVE_SLOT : {
            return state.filter(element => element !== action.payload)
           
        } 
        case CLEAR_SLOT : {
            ("cleared")
            return []
        }
        default : {
            return state 
        }
    }
} 


const bookingReducer = (state = { turf : "" , date : new Date() , slots : [] , amount : 0 } , action) => {
    switch(action.type) {
        case ADD_SLOT : {
            return {...state , slots : slotReducer(state.slots , action)} 
        } 
        case REMOVE_SLOT : {
            return {...state , slots : slotReducer(state.slots , action)} 
        } 
        case CLEAR_SLOT : {
            return {...state , slots : []}
        }
        case SET_TURF : {
            return {...state , turf : action.payload}
        } 
        case SET_DATE : {
            return {...state , date : action.payload} 
        }  
        case RESET_DATE : {
            return {...state , date : new Date()}
        }
        default : {
            return state 
        }
    }
} 

const reducer = combineReducers({
    user : userReducer,
    booking : bookingReducer , 

}) 


export default reducer ; 