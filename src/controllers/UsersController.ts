import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {

  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body
    const usersService = new UsersService()
    try {
      const user = await usersService.create({ email })
      return response.json(user)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { UsersController }