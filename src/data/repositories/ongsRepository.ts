import { AppDataSource } from "@data/data-source";
import { Ongs } from "@data/entities/Ongs";
import { Like, FindOperator } from "typeorm";
import { Pagination } from "@data/repositories/types";
export interface Filter {
  id?: number;
  name?: string | FindOperator<string>;
  is_active?: boolean;
}

const repository = AppDataSource.getRepository(Ongs);

async function find(filter: Filter, pagination: Pagination) {
  if (filter.name) {
    filter.name = Like(`%${filter.name}%`);
  }

  filter.is_active = true;

  return await repository.find({
    where: filter,
    take: pagination.limit,
    skip: pagination.offset,
  });
}

export const ongsRepository = {
  find,
}
