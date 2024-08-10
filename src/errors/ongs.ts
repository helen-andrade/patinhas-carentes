import { httpBadRequest, HttpResponse } from "@protocols/http";
import { Response } from "express";

export function invalidOngIdError(res: Response): Response<HttpResponse> {
  return httpBadRequest(res, 'ONG id must be greater than zero')
}
