import { Response } from "express";

export type HttpResponse = HttpSuccess | HttpInternalServerError | HttpBadRequest;

interface Meta {
  total: number;
  limit?: number;
  offset?: number;
}

interface HttpSuccess {
  status: 'success';
  data: any[];
  meta?: Meta
}

interface HttpInternalServerError {
  status: 'error';
  message: string;
}

interface HttpBadRequest {
  status: 'failure';
  message: string;
}

export function httpSuccess(res: Response, data: any[], meta: Meta): Response<HttpSuccess> {
  return res.status(200).json({
    status: 'success',
    data,
    meta,
  });
}

export function httpInternalServerError(res: Response): Response<HttpInternalServerError> {
  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  });
}

export function httpBadRequest(res: Response, message): Response<HttpBadRequest> {
  return res.status(400).json({
    status: 'failure',
    message
  });
}
