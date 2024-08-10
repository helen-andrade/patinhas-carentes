import { Request, Response } from "express";
import * as ongsRepository from "@data/repositories/ongsRepository";
import { Pagination } from "@data/repositories/types";
import { httpInternalServerError, httpSuccess, HttpResponse, httpBadRequest } from "@protocols/http";

function makeFilters(req: Request): ongsRepository.Filter {
  let filter: ongsRepository.Filter = {}

  if (req.params.id) filter.id = Number(req.params.id);
  if (req.query.name) filter.name = String(req.query.name);

  return filter;
}

function makePagination(req: Request): Pagination {
  return {
    limit: Number(req.query.limit) || 10,
    offset: Number(req.query.offset) || 0,
  };
}

export default async function getOngsController(req: Request, res: Response): Promise<Response<HttpResponse>> {
  try {
    const filter = makeFilters(req);
    const pagination = makePagination(req);

    if (filter.id && filter.id <= 0) return httpBadRequest(res, 'ONG id must be greater than zero');
    if (pagination.limit && pagination.limit < 0) {
      return httpBadRequest(res, 'Pagination limit must be greater or equal than zero');
    }
    if (pagination.offset && pagination.offset < 0) {
      return httpBadRequest(res, 'Pagination offset must be greater or equal than zero');
    }

    const data = await ongsRepository.find(filter, pagination);

    return httpSuccess(
      res,
      data,
      {
        total: data.length,
        limit: pagination.limit,
        offset: pagination.offset
      }
    );
  } catch (error) {
    console.error(error);
    return httpInternalServerError(res);
  }
}
