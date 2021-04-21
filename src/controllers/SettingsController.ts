import { Request, Response } from 'express'
import { SettingService } from '../services/SetingsService'

class SettingsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { chat, username } = request.body
    const settingService = new SettingService()

    try {
      const setting = await settingService.create({ chat, username })
      return response.json(setting)
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }

  }
}

export { SettingsController }