import {IS_GETTING_IMAGES_STATUS} from "actions/actionTypes";
import {PENDING, DONE} from "constants/generalConstants";

export const getImages = () => {
    return async (dispatch, getState) => {
        dispatch(isGettingImagesStatus(PENDING));
        setTimeout(() => { dispatch(isGettingImagesStatus(DONE))}, 1000)
    }
};

const isGettingImagesStatus = (status) => {
    return{
        type: IS_GETTING_IMAGES_STATUS,
        payload: status
    }
};