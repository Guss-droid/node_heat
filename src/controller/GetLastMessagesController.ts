import { Request, Response } from "express";
import { GetLastMessages } from "../services/GetLastMessages";

export class GetLastMessagesController{

  async handle(req: Request, res: Response){
    const service = new GetLastMessages()

    const result = await service.execute()

    return res.json(result)
  }

}