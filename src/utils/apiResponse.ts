class ApiResponse<T = any> {
  message: string;
  statusCode: number;
  notify: string;
  data: T;
  success: boolean;

  constructor(
    message: string = "Successful",
    statusCode: number,
    notify: string,
    data: T
  ) {
    this.message = message;
    this.statusCode = statusCode;
    this.notify = notify;
    this.data = data;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };