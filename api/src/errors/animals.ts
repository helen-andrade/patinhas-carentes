import { httpBadRequest, HttpResponse } from "@protocols/http";
import { Response } from "express";

export function invalidAnimalIdError(res: Response): Response<HttpResponse> {
  return httpBadRequest(res, 'Animal id must be greater than zero');
}

export function animalIdRequiredError(res: Response): Response<HttpResponse> {
  return httpBadRequest(res, 'Animal id must be provided');
}
