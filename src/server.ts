/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable max-classes-per-file */
interface IUserRepository {
  create(): void;
}

class UserRepository implements IUserRepository {
  create(): void {
    console.log('Repository');
  }
}

class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  public execute() {
    this.userRepository.create();
  }
}

const createUserService = new CreateUserService(new UserRepository());
createUserService.execute();
