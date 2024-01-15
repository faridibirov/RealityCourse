import {
    GET_APARTMENTS_LOADING_IN_PROGRESS,
    GET_APARTMENTS_SUCCESS,
    GET_APARTMENTS_ERROR
} from './apartmentIndexConstants.jsx';

const initialState = {
    apartmentsInfo: [
        { id: 1, houseId: 1, floor: null, roomAmount: null, price: null, livingSpace: null }
    ],
    error: null,
    isLoading: false,
    totalCount:0
};

export default function apartments(state = initialState, action) {
    switch (action.type) {
        case GET_APARTMENTS_LOADING_IN_PROGRESS:
            return { ...state, isLoading: true };

        case GET_APARTMENTS_SUCCESS:
            return { ...state, apartmentsInfo: action.apartmentsInfo, error: '', isLoading: false, totalCount:action.totalCount };

        case GET_APARTMENTS_ERROR:
            return { ...state, error: action.error, isLoading: false };

        default:
            return state;
    }
}