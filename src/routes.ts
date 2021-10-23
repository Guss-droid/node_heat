import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateMessageController } from "./controller/CreateMessageController";
import { GetLastMessagesController } from "./controller/GetLastMessagesController";
import { ProfileUserController } from "./controller/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { prismaClient } from "./prisma";

export const routes = Router()

const authenticateUserController = new AuthenticateUserController()
const createMessageController = new CreateMessageController()
const getLastMessages = new GetLastMessagesController()
const profileUser = new ProfileUserController()

routes.post('/authenticate', authenticateUserController.handle)
routes.post('/message', ensureAuthenticated, createMessageController.handle)
routes.get('/message/last', getLastMessages.handle)
routes.get('/profile', ensureAuthenticated, profileUser.handle)
routes.get('/feed/:id', async (req, res) => {
  const id_user = req.params.id
  const posts = await prismaClient.message.findMany({
    where: { user_id: id_user },
    include: { user: true }
  })
  res.json(posts)
})