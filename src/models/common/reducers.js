import * as c from './constants';


const initialState = {
    isMobile: false,
    drawerVisible: true
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case c.setIsMobile.success: {
            return {
                ...state,
                isMobile: action.payload
            };
        }
        case c.setDrawerVisible.success: {
            return {
                ...state,
                drawerVisible: action.payload
            };
        }
        default:
            return state;
    }
};

export default reducers;
