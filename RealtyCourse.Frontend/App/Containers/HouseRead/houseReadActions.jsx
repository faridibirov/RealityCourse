import {
    GET_HOUSE_LOADING_IN_PROGRESS,
    GET_HOUSE_SUCCESS,
    GET_HOUSE_ERROR

} from 'houseReadConstants.jsx'

export function startReceiving() {
    return {
        type: GET_HOUSE_LOADING_IN_PROGRESS
    };
}

export function receiveHouse(data) {
    return {
        type: GET_HOUSE_SUCCESS,
        houseInfo:data.houseInfo
    };
}

export function errorReceiveHouse(data) {
    return {
        type: GET_HOUSE_ERROR,
        error: data
    };
}


export function getHouse(id) {

}