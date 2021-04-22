
import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../entities/Message"
import { MessagesRepository } from "../repositories/MessagesRepository"

interface MessageCreate {
  admin_id?: string
  text: string
  user_id: string
}

class MessagesService {
  private messageRepository: Repository<Message>
  constructor() {
    this.messageRepository = getCustomRepository(MessagesRepository)
  }
  async create({ admin_id, text, user_id }: MessageCreate): Promise<Message> {

    const message = this.messageRepository.create({ admin_id, text, user_id })
    await this.messageRepository.save(message)
    return message
  }

  async listByUser(user_id: string): Promise<Message[]> {

    const messagesList = await this.messageRepository.find(
      {
        where: { user_id },
        relations: ['user']
      }
    )
    return messagesList
  }
}

export { MessagesService }