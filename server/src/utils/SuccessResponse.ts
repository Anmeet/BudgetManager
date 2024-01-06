export class SuccessResponse<T> {
  data: T;
  statusCode: number;

  constructor(data: T, statusCode: number) {
    this.statusCode = statusCode;
    this.data = data;
  }
}
