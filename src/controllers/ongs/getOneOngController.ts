import { Request, Response } from "express";
import { ongsRepository } from "@data/repositories/ongsRepository";
import { httpInternalServerError, httpSuccess, HttpResponse } from "@protocols/http";
import { invalidOngIdError } from "@errors/ongs";

export default async function getOneOngsController(req: Request, res: Response): Promise<Response<HttpResponse>> {
  try {
    const ongId = Number(req.params.ongId);
    if (!ongId || ongId <= 0) return invalidOngIdError(res);

    const ong = await ongsRepository.findOne({
      id: ongId,
      is_active: true
    });

    const data = [];
    if(ong) data.push(ong);

    return httpSuccess(
      res,
      data,
      {
        total: data.length
      }
    );
  } catch (error) {
    console.error(error);
    return httpInternalServerError(res);
  }
}
