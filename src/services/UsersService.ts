import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User"
import { UsersRepository } from "../repositories/UsersRepository"

interface UsersServiceCreate {
  email: string
}
class UsersService {

  private usersRepository: Repository<User>
  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository)
  }
  async create({ email }: UsersServiceCreate) {


    //verify if user exist
    const userExist = await this.usersRepository.findOne({ email })
    if (userExist) return userExist

    //else save to DB and return user
    const user = this.usersRepository.create({ email })
    await this.usersRepository.save(user)
    return user
  }
}

export { UsersService }