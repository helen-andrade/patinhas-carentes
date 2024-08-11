import { httpBadRequest, HttpResponse } from "@protocols/http";
import { Response } from "express";

export function invalidOngIdError(res: Response): Response<HttpResponse> {
  return httpBadRequest(res, 'ONG id must be greater than zero');
}

export function ongIdRequiredError(res: Response): Response<HttpResponse> {
  return httpBadRequest(res, 'ONG id must be provided');
}

export function ongRequiredFiledNotProvidedError(res: Response, field: string): Response<HttpResponse> {
  return httpBadRequest(res, `The field ${ field } is required`);
}

export function invalidOngNameFieldError(res: Response): Response<HttpResponse> {
  return httpBadRequest(res, 'The name of the ONG must have at least three characters');
}

export function invalidOngFieldFormatError(res: Response, field: string): Response<HttpResponse> {
  return httpBadRequest(res, `Invalid ${ field }, check the format and try again`);
}

export function ongFieldAlreadyInUseError(res: Response, field: string): Response<HttpResponse> {
  return httpBadRequest(res, `The ${ field } is already in use`);
}
