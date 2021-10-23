import { prismaClient } from "../prisma";

export class GetMessagesUser {

  async execute(id_user: string) {
    const messages = await prismaClient.message.findMany({
      where: {
        user_id: id_user
      },
      include: { user: true }
    })

    return messages
  }

}