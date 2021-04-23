/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
import 'reflect-metadata';

import { container, injectable, inject } from 'tsyringe';

interface IUserRepository {
  create(): void;
}

class UserRepository implements IUserRepository {
  create(): void {
    console.log('Repository');
  }
}

@injectable()
class CreateUserService {
  constructor(@inject('UserRepository') private userRepository: IUserRepository) {}

  public execute() {
    this.userRepository.create();
  }
}

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

const createUserService = container.resolve(CreateUserService);
createUserService.execute();


