import { httpInternalServerError, HttpResponse, httpSuccess } from "@protocols/http";
import { Request, Response } from "express";
import { animalsRepository } from "@data/repositories/animalsRepository";
import { ongIdRequiredError, invalidOngIdError } from "@errors/ongs";
import { animalIdRequiredError, invalidAnimalIdError } from "@errors/animals";

export default async function getOneAnimalByOngController(req: Request, res: Response): Promise<Response<HttpResponse>> {
  try {
    const ongId = Number(req.params.ongId);
    if (!ongId) return ongIdRequiredError(res);
    if (ongId <= 0) return invalidOngIdError(res);

    const animalId = Number(req.params.animalId);
    if (!animalId) return animalIdRequiredError(res);
    if (animalId <= 0) return invalidAnimalIdError(res);

    const animal = await animalsRepository.findOne(animalId, ongId);
    const data = [];
    if(animal) data.push(animal);

    return httpSuccess(
      res,
      data,
      {
        total: data.length
      });
  } catch (error) {
    console.error(error);
    return httpInternalServerError(res);
  }
}
