import { CHANGEVARIABLE } from './type';

export const changeVariable = (key, value) => ({
  type: CHANGEVARIABLE,
  payload: { key, value },
});

export const productionFlag = false;
export const baseUrl = 'https://se-teamd.herokuapp.com/';
