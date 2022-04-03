import {AUTH_REQ,AUTH_SUCCESS,AUTH_FAILURE} from './types';



export const authSuccess= (conte_)
;

    localStorage.setItem('USER_temp',content.token);
    return {
        type:AUTH_SUCCESS,
        payload:content.AUTH_FAILURE
    }
}

export const authenticate=()=>{
    return {
        type:AUTH_REQ
    }
}
export const authFailure=(error)=>{
    return {
        type:AUTH_FAILURE,
        payload:error
    }
}
