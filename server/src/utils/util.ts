/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (typeof value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};
export class SuccessResponse<T> {
  data: T;
  statusCode: number;
  message?: string;

  constructor(data: T, statusCode: number, message?: string) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
  }
}
