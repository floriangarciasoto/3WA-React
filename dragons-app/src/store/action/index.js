import {POST_SET_VALUE} from "../action-type/index.js";

export const setPostValue = (payload) => {
    return {
        type: POST_SET_VALUE,
        payload
    }
}
