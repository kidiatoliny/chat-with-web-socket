import { getCustomRepository, Repository } from "typeorm"
import { Setting } from "../entities/Setting"
import { SettingsRepository } from "../repositories/SettingsRepository"

interface SettingsCreate {
  chat: boolean
  username: string
}
class SettingService {

  private settingsRepository: Repository<Setting>

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository)
  }



  async create({ chat, username }: SettingsCreate) {


    const userAlreadyExists = await this.settingsRepository.findOne({
      username
    })

    if (userAlreadyExists) {
      throw new Error('User already exists !')
    }

    const setting = this.settingsRepository.create({
      chat,
      username
    })
    await this.settingsRepository.save(setting)
  }
}
export { SettingService }