import { mySQL } from "@drivers/typeorm/mySQL";
import { Animals } from "@drivers/typeorm/entities/Animals";
import { Pagination } from "@data/repositories/types";

export interface Filter {
  ong_id: number;
  is_available?: boolean;
}

const repository = mySQL.getRepository(Animals);

async function findAll(filter: Filter, pagination: Pagination): Promise<Animals[]> {
  const where: { [key: string]: any } = { ong: { id: filter.ong_id } };

  if (filter.is_available) {
    where.is_available = filter.is_available;
  }

  return await repository.find({
    where,
    take: pagination.limit,
    skip: pagination.offset,
  });
}

async function findOne(id: number): Promise<Animals> {
  return await repository.findOne({ where: { id } });
}

export const animalsRepository = {
  findAll,
  findOne
}
