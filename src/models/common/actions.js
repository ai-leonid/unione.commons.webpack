import * as c from './constants';


export const setDrawerVisible = (value) => ({
  type: c.setDrawerVisible.success,
  payload: value
});

export const setIsMobile = (value) => ({
  type: c.setIsMobile.success,
  payload: value
});
