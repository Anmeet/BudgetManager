export class SuccessResponse<T> {
  statusCode: number;
  data: T;

  constructor(data: T, statusCode: number) {
    this.statusCode = statusCode;
    this.data = data;
  }
}
