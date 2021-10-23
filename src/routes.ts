import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateMessageController } from "./controller/CreateMessageController";
import { GetLastMessagesController } from "./controller/GetLastMessagesController";
import { GetMessagesUserController } from "./controller/GetMessagesUserController";
import { ProfileUserController } from "./controller/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

export const routes = Router()

const authenticateUserController = new AuthenticateUserController()
const createMessageController = new CreateMessageController()
const getLastMessages = new GetLastMessagesController()
const profileUser = new ProfileUserController()
const getMessageUser = new GetMessagesUserController()

routes.post('/authenticate', authenticateUserController.handle)
routes.post('/message', ensureAuthenticated, createMessageController.handle)
routes.get('/message/last', getLastMessages.handle)
routes.get('/profile', ensureAuthenticated, profileUser.handle)
routes.get('/message/:id', ensureAuthenticated, getMessageUser.handle )