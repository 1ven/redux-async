/* import { IActionPayload, IAsyncActionTypes, IAsyncActions } from '../interfaces'; */
import { assign } from '../utils';

const createShelfActions = function([request, success, failure]: any) {
  return {
    request(payload?) {
      return {
        type: request,
        payload,
      };
    },
    success(payload?) {
      return {
        type: success,
        payload,
      };
    },
    failure(payload: any = {}) {
      return {
        type: failure,
        payload: assign(payload, {
          message: payload.message || 'Something bad happened',
        }),
      };
    },
  };
}

export default createShelfActions;
