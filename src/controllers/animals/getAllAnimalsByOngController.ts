import { httpInternalServerError, HttpResponse, httpSuccess } from "@protocols/http";
import { Request, Response } from "express";
import { animalsRepository, Filter } from "@data/repositories/animalsRepository";
import { Pagination } from "@data/repositories/types";
import { invalidPaginationLimitError, invalidPaginationOffsetError } from "@errors/data";
import { ongIdRequiredError, invalidOngIdError } from "@errors/ongs";

export default async function getAllAnimalsByOngController(req: Request, res: Response): Promise<Response<HttpResponse>> {
  try {
    const ongId = Number(req.params.ongId);
    if(!ongId) return ongIdRequiredError(res);
    if(ongId <= 0) return invalidOngIdError(res);

    const filter = {
      ong_id: ongId,
      is_available: true,
      specie: String(req.query.specie)
    };

    if(!req.query.specie) delete filter.specie;

    const pagination = makePagination(req);

    if (pagination.limit && pagination.limit < 0) return invalidPaginationLimitError(res);
    if (pagination.offset && pagination.offset < 0) return invalidPaginationOffsetError(res);

    const data = await animalsRepository.findAll(filter, pagination);

    return httpSuccess(
      res,
      data,
      {
        total: data.length,
        limit: pagination.limit,
        offset: pagination.offset
      });
  } catch (error) {
    console.error(error);
    return httpInternalServerError(res);
  }
}

function makePagination(req: Request): Pagination {
  return {
    limit: Number(req.query.limit) || 10,
    offset: Number(req.query.offset) || 0,
  };
}
