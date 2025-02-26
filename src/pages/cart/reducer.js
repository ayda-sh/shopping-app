import { actionType } from "../../../actions";

export const initialsState = {
    items: [],
    originalItems: [],
    isLoading: false,
    isError: false,
};

export const reducer = (state, action) => {
    if (action.type === actionType.SET_LOADING) {
        return {...state, isLoading: action.payload};
    }
    if (action.type === actionType.SET_ITEM) {
        return {...state, items: action.payload};
    }
    if (action.type === actionType.SET_ORIGINAL_ITEM) {
        return {...state, originalItems: action.payload};
    } 
    if (action.type === actionType.SET_ERROR) {
        return {...state, isError: action.payload}
    }
    if (action.type === actionType.CLEAR_CART) {
        return {...state, items: []};
    }
};