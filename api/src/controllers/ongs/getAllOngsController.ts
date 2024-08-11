import { Request, Response } from "express";
import { ongsRepository, Filter } from "@data/repositories/ongsRepository";
import { Pagination } from "@data/repositories/types";
import { httpInternalServerError, httpSuccess, HttpResponse, httpBadRequest } from "@protocols/http";
import { invalidPaginationLimitError, invalidPaginationOffsetError } from "@errors/data";

export default async function getAllOngsController(req: Request, res: Response): Promise<Response<HttpResponse>> {
  try {
    const filter = makeFilters(req);
    const pagination = makePagination(req);

    if (pagination.limit && pagination.limit < 0) return invalidPaginationLimitError(res);
    if (pagination.offset && pagination.offset < 0) return invalidPaginationOffsetError(res);

    const data = await ongsRepository.findAll(filter, pagination);

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

function makeFilters(req: Request): Filter {
  let filter: Filter = {}

  if (req.query.name) filter.name = String(req.query.name);
  if (req.query.city) filter.city = String(req.query.city);

  filter.is_active = true;

  return filter;
}

function makePagination(req: Request): Pagination {
  return {
    limit: Number(req.query.limit) || 10,
    offset: Number(req.query.offset) || 0,
  };
}
