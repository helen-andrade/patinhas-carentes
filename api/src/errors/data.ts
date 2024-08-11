import { httpBadRequest, HttpResponse } from "@protocols/http";
import { Response } from "express";

export function invalidPaginationLimitError(res: Response): Response<HttpResponse> {
  return httpBadRequest(res, 'Pagination limit must be greater or equal than zero');
}

export function invalidPaginationOffsetError(res: Response): Response<HttpResponse> {
  return httpBadRequest(res, 'Pagination offset must be greater or equal than zero');
}
