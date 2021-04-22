import { Request, Response } from 'express';
import { MessagesService } from '../services/MessagesService';
class MessagesController {

  async create(request: Request, response: Response): Promise<Response> {
    const { admin_id, text, user_id } = request.body
    const messagesService = new MessagesService()
    try {

      const message = await messagesService.create({
        admin_id,
        text,
        user_id
      })
      return response.status(201).json(message)
    } catch (error) {
      return response.status(500).json(error)
    }
  }

  async showByUser(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const messagesService = new MessagesService()

    try {

      const messageList = await messagesService.listByUser(id)
      return response.status(200).json(messageList)

    } catch (error) {
      return response.status(500).json(error)
    }
  }
}

export { MessagesController }