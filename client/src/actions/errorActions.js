import { GET_ERRORS, CLEAR_ERRORS } from './types';

// RETURN 
export const returnErrors = (msg, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id }
  };
};

// CLEAR 
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};