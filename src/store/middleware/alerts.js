import { message } from 'antd';

import { constants } from '../../models';


const {
  GET_USER_ORGANIZATION_FAILURE,
  GET_USER_DATA_FAILURE,
} = constants;

const errorEvents = [
  GET_USER_DATA_FAILURE,
  GET_USER_ORGANIZATION_FAILURE
];

const alertMiddleware = () => (next) => (action) => {
  if (errorEvents.includes(action.type)) {
    const { message: errorMessage } = action.payload;

    message.error(errorMessage);
  }

  next(action);
};

export default alertMiddleware;
