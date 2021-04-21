import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

interface UsersServiceCreate {
  email: string
}
class UsersService {

  async create({ email }: UsersServiceCreate) {

    const usersRepository = getCustomRepository(UsersRepository)
    //verify if user exist
    const userExist = await usersRepository.findOne({ email })
    if (userExist) return userExist

    //else save to DB and return user
    const user = usersRepository.create({ email })
    await usersRepository.save(user)
    return user
  }
}

export { UsersService }