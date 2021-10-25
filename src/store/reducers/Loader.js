import * as types from '../types';

const INITIAL_STATE = false ;

const loader = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case types.SHOW_LOADER :
            return action.data;
        case types.HIDE_LOADER :
            return action.data;
            case types.SHOW_DISABLED :
                return action.value;
            case types.HIDE_DISABLED :
                return action.value;
        default:
            return state;
    }
}

export default loader;