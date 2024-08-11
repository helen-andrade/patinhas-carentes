import { mySQL } from "@drivers/typeorm/mySQL";
import { Ongs } from "@drivers/typeorm/entities/Ongs";
import { Like, FindOperator } from "typeorm";
import { Pagination } from "@data/repositories/types";

export interface Filter {
  id?: number;
  name?: string | FindOperator<string>;
  city?: string | FindOperator<string>;
  is_active?: boolean;
}

const repository = mySQL.getRepository(Ongs);

async function find(filter: Filter, pagination: Pagination) {
  if (filter.name) {
    filter.name = Like(`%${filter.name}%`);
    filter.name = Like(`%${filter.city}%`);
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
