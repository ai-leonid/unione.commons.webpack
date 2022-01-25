/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-shadow */
import { combineReducers } from 'redux';

import common from './common';


const modules = [
    common
];

export default modules;

export const actions = modules.reduce(
    (previousValue, { actions }) => ({ ...previousValue, ...actions }), {}
);

export const constants = modules.reduce(
    (previousValue, { constants }) => ({ ...previousValue, ...constants }), {}
);

export const reducers = combineReducers(
    modules.reduce(
        (previousValue, { reducers, options }) =>
            (reducers
                ? ({ ...previousValue, [options.name]: reducers })
                : previousValue
            ), {}
    )
);

export const saga = modules.reduce(
    (previousValue, { saga }) =>
        (saga ? [...previousValue, saga] : previousValue
        ), []
);

export const selectors = modules.reduce(
    (previousValue, { selectors }) => ({ ...previousValue, ...selectors }), {}
);
