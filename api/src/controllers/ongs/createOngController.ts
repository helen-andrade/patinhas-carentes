import { Request, Response } from "express";
import { httpInternalServerError, HttpResponse, httpCreated } from "@protocols/http";
import {
  invalidOngNameFieldError,
  ongRequiredFiledNotProvidedError,
  invalidOngFieldFormatError,
  ongFieldAlreadyInUseError
} from "@errors/ongs";
import { NewOng, ongsRepository } from "@data/repositories/ongsRepository";

export default async function createOngController(req: Request, res: Response): Promise<Response<HttpResponse>> {
  try {
    const {
      name,
      email,
      description,
      whatsapp,
      city,
      state,
      cnpj
    } = req.body;

    if(!name || !name.length) return ongRequiredFiledNotProvidedError(res, 'name');
    if(!email || !email.length) return ongRequiredFiledNotProvidedError(res, 'email');
    if(!description || !description.length) return ongRequiredFiledNotProvidedError(res, 'description');
    if(!whatsapp || !whatsapp.length) return ongRequiredFiledNotProvidedError(res, 'whatsapp');
    if(!city || !city.length) return ongRequiredFiledNotProvidedError(res, 'city');
    if(!state || !state.length) return ongRequiredFiledNotProvidedError(res, 'state');
    if(!cnpj || !cnpj.length) return ongRequiredFiledNotProvidedError(res, 'cnpj');

    if(name.length < 3) return invalidOngNameFieldError(res);

    const emailValidatorRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
    if(!emailValidatorRegex.test(email)) return invalidOngFieldFormatError(res, 'Email');

    const cnpjNormalized = cnpj.replace(/[^\d]+/g, '');
    if(cnpjNormalized.length !== 14) return invalidOngFieldFormatError(res, 'CNPJ');
    // TODO: verificar se o CNPJ é valido

    const cellphoneValidatorRegex = /^\+\d{1,4}\s?\(?\d{1,4}\)?\s?\d{1,14}(-\d{1,4})?$/;
    if(!cellphoneValidatorRegex.test(whatsapp)) return invalidOngFieldFormatError(res, 'WhatsApp');
    const whatsappNormalized = whatsapp.replace(/[^\d+]/g, '');

    const isEmailAlreadyInUse = await ongsRepository.findOne({ email });
    if(isEmailAlreadyInUse) return ongFieldAlreadyInUseError(res, 'Email');

    const isCnpjAlreadyInUse = await ongsRepository.findOne({ cnpj: cnpjNormalized });
    if(isCnpjAlreadyInUse) return ongFieldAlreadyInUseError(res, 'CNPJ');

    const isWhatsappAlreadyInUse = await ongsRepository.findOne({ whatsapp: whatsappNormalized });
    if(isWhatsappAlreadyInUse) return ongFieldAlreadyInUseError(res, 'WhatsApp');

    const ong: NewOng = {
      name,
      email,
      description,
      whatsapp: whatsappNormalized,
      city,
      state,
      cnpj: cnpjNormalized,
      is_active: false,
      logo_url: ''
    }

    const createdOng = await ongsRepository.create(ong);
    const data = [];
    if(createdOng) data.push(createdOng);

    return httpCreated(
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

