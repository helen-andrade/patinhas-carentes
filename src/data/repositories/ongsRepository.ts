import { AppDataSource } from "@data/data-source";
import { Ongs } from "@data/entities/Ongs";
import { Like, FindOperator } from "typeorm";

const repository = AppDataSource.getRepository(Ongs);

export interface Filter {
  id?: number;
  name?: string | FindOperator<string>;
  is_active?: boolean;
}

interface Pagination {
  limit?: number;
  offset?: number;
}

export async function find(filter: Filter, pagination: Pagination) {
  if(filter.name) {
    filter.name = Like(`%${filter.name}%`);
  }

  filter.is_active = true;

  return await repository.find({
    where: filter,
    take: pagination.limit,
    skip: pagination.offset,
  });
}
