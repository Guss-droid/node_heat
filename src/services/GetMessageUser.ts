import { prismaClient } from "../prisma";

export class GetMessagesUser {

  async execute(id_user: string) {
    const messages = await prismaClient.message.findMany({
      take: 5,
      where: {
        user_id: id_user
      },
      include: { user: true },
      orderBy: {
        created_at: "desc"
      }
    })

    return messages
  }

}