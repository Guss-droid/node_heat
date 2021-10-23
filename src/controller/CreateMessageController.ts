import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

export class CreateMessageController {

  async handle(req: Request, res: Response) {
    const { user_id } = req
    const { message } = req.body

    const service = new CreateMessageService()

    try {
      const result = await service.execute(message, user_id);
      return res.json(result);
    } catch (err) {
      return res.json(err.message)
    }
  }

}