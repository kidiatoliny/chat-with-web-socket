import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { SettingsRepository } from '../repositories/SettingsRepository'
class SettingsController {
  async create(request: Request, response: Response) {
    const settingsRepository = getCustomRepository(SettingsRepository)

    const { chat, username } = request.body

    const setting = settingsRepository.create({
      chat,
      username
    })
    await settingsRepository.save(setting)
    return response.json(setting)

  }
}

export { SettingsController }