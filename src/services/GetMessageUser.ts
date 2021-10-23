import { prismaClient } from "../prisma";

export class GetMessagesUser {

  async execute() {
    const messages = await prismaClient.message.findMany({
      where: {
        user_id: String()
      }
    })

    return messages
  }

}