import { Request, Response } from "express";
import { GetMessagesUser } from "../services/GetMessageUser";



export class GetMessagesUserController {

  async handle(req: Request, res: Response){
    const id_user = req.params.id
    
    const service = new GetMessagesUser()
    const result = await service.execute(id_user)

    res.json(result)
  }

}