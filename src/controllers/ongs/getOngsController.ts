import { Request, Response } from "express";
import * as ongsRepository from "@repositories/ongsRepository";

interface Filter {
  id?: number;
  name?: string;
}

interface Pagination {
  limit?: number;
  offset?: number;
}

interface HttpResponse {
  status: 'success' | 'failure' | 'error';
  data: any[];
  meta?: {
    total: number;
    limit: number;
    offset: number;
  };
  error?: {
    message: string;
  }
}

function makeFilters(req: Request): Filter {
  let filter: Filter = {}

  if (req.params.id) filter.id = Number(req.params.id);
  if (req.query.name) filter.name = String(req.query.name);

  return filter;
}

function makePagination(req: Request): Pagination {
  let pagination: Pagination = {};

  pagination.limit = Number(req.query.limit) || 10;
  pagination.offset = Number(req.query.offset) || 0;

  return pagination;
}


export default async function getOngsController(req: Request, res: Response): Promise<Response<HttpResponse>> {
  try {
    const filter = makeFilters(req);
    const pagination = makePagination(req);

    const ongs = await ongsRepository.find(filter, pagination);

    return res.status(200).json({
      status: 'success',
      meta: {
        total: ongs.length,
        limit: pagination.limit,
        offset: pagination.offset
      },
      data: ongs,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      status: 'error',
      error: 'Internal Server Error',
    });
  }
}
