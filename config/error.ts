class ApiError extends Error {
  // name : Inherited
  // message : Inherited
  redirectUrl?: string;
  refresh?: boolean;
}

export class ForbiddenError extends ApiError {
  // name: "ForbiddenError";
  // message: "잘못된 접근입니다";
  redirectUrl = "/";
}

export class InternalServerError extends ApiError {
  name = "InternalServerError";
  message = "요청을 처리하지 못했습니다";
}

export class ServiceUnavailableError extends ApiError {
  name = "ServiceUnavailableError";
  message = "잠시 후 재연결됩니다";
  refresh = true;
}
