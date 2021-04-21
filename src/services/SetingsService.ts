import { getCustomRepository } from "typeorm"
import { SettingsRepository } from "../repositories/SettingsRepository"

interface SettingsCreate {
  chat: boolean
  username: string
}
class SettingService {

  async create({ chat, username }: SettingsCreate) {

    const settingsRepository = getCustomRepository(SettingsRepository)

    const userAlreadyExists = await settingsRepository.findOne({
      username
    })

    if (userAlreadyExists) {
      throw new Error('User already exists !')
    }

    const setting = settingsRepository.create({
      chat,
      username
    })
    await settingsRepository.save(setting)
  }
}
export { SettingService }