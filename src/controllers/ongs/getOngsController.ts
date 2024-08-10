import { Request, Response } from "express";

export default async function getOngsController(req: Request, res: Response): Promise<any> {
    return res.json({ status: 'success', data: [] });
}