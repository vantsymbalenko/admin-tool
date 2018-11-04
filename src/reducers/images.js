import {UNSENT} from "../constants/generalConstants";
import {IS_GETTING_IMAGES_STATUS} from "../actions/actionTypes";

const INTIAL_STATE = {
    isGettingImages : UNSENT,
    listOfImages: {
        1 : {
            image: require("../assets/1.jpg")
        },
        2 : {
            image: require("../assets/2.jpeg")
        },
        3 : {
            image: require("../assets/3.JPG")
        },
        4 : {
            image: require("../assets/4.JPG")
        },
    }
};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case IS_GETTING_IMAGES_STATUS: {
            return{
                ...state,
                isGettingImages: action.payload
            }
        }
        default: {
            return state;
        }
    }
};
