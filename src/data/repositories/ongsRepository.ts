import { mySQL } from "@drivers/typeorm/mySQL";
import { Ongs } from "@drivers/typeorm/entities/Ongs";
import { Like, FindOperator } from "typeorm";
import { Pagination } from "@data/repositories/types";

export interface Filter {
  id?: number;
  name?: string | FindOperator<string>;
  city?: string | FindOperator<string>;
  cnpj?: string | FindOperator<string>;
  email?: string | FindOperator<string>;
  whatsapp?: string | FindOperator<string>;
  is_active?: boolean;
}

export interface NewOng {
  name: string;
  email: string;
  description: string;
  whatsapp: string;
  city: string;
  state: string;
  cnpj: string;
  is_active: boolean;
  logo_url: string;
}

const repository = mySQL.getRepository(Ongs);

async function find(filter: Filter, pagination: Pagination) {
  if (filter.name) {
    filter.name = Like(`%${filter.name}%`);
    filter.name = Like(`%${filter.city}%`);
  }

  return await repository.find({
    where: filter,
    take: pagination.limit,
    skip: pagination.offset,
  });
}

async function findOne(filter: Filter): Promise<Ongs> {
  return await repository.findOne({ where: filter });
}

async function create(ong: NewOng): Promise<Ongs> {
  return await repository.save(ong);
}

export const ongsRepository = {
  find,
  findOne,
  create
}
