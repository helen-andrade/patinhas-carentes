import { Request, Response } from "express";
import { ongsRepository, Filter } from "@data/repositories/ongsRepository";
import { Pagination } from "@data/repositories/types";
import { httpInternalServerError, httpSuccess, HttpResponse, httpBadRequest } from "@protocols/http";
import { invalidOngIdError } from "@errors/ongs";
import { invalidPaginationLimitError, invalidPaginationOffsetError } from "@errors/data";

export default async function getOngsController(req: Request, res: Response): Promise<Response<HttpResponse>> {
  try {
    const filter = makeFilters(req);
    const pagination = makePagination(req);

    if (filter.id && filter.id <= 0) return invalidOngIdError(res);
    if (pagination.limit && pagination.limit < 0) return invalidPaginationLimitError(res);
    if (pagination.offset && pagination.offset < 0) return invalidPaginationOffsetError(res);

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

function makeFilters(req: Request): Filter {
  let filter: Filter = {}

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
