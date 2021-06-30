import { ADD_SLOT, CLEAR_SLOT, REMOVE_SLOT, RESET_DATE, SET_DATE, SET_TURF } from "../action-types"


export const addSlot = (state) => {
    return {
        type : ADD_SLOT , 
        payload : state
    }
}  

export const removeSlot = (state) => {
    return {
        type : REMOVE_SLOT , 
        payload : state
    }
} 

export const clearSlot = () => {
    return {
        type : CLEAR_SLOT 
    }
}

export const setTurf = (state) => {
    return {
        type : SET_TURF , 
        payload : state 
    }
} 

export const setDate = (state) => {
    return {
        type : SET_DATE , 
        payload : state , 
    }
} 

export const resetDate = () => {
    return {
        type: RESET_DATE 
    }
}