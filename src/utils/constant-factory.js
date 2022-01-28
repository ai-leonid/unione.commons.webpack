/**
 * Получение набора констант для асинхронной функции
 * @param name
 * @returns {
 *  tries: string, success: string, failure: string, toString: (function(): *)
 * }
 */
export const getConstant = (name) => ({
  tries: `${name}_TRY`,
  success: `${name}_SUCCESS`,
  failure: `${name}_FAILURE`,
  toString: () => name
});

const action = (name, body, misc) => ({ type: name, payload: body, misc });

export const getActions = (tries, success, failure, misc) => [
  (body) => action(tries, body, misc),
  (body) => action(success, body, misc),
  (body) => action(failure, body, misc),
];

export const getActionsFromConstant = (constant, misc) => [
  (body) => action(constant.tries, body, misc),
  (body) => action(constant.success, body, misc),
  (body) => action(constant.failure, body, misc)
];
