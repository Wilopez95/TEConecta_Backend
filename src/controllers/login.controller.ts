// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


import { post, requestBody, HttpErrors } from '@loopback/rest';
import { User } from '../models';
import { UserRepository, UserRoleRepository } from '../repositories';
import { repository } from '@loopback/repository';
import { Credentials, JWT_SECRET } from '../auth';
import { promisify } from 'util';

const { sign } = require('jsonwebtoken');
const signAsync = promisify(sign);

export class LoginController {
  constructor(
    @repository(UserRepository) private userRepository: UserRepository,
    @repository(UserRoleRepository) private userRoleRepository: UserRoleRepository,
  ) { }

  @post('/users')
  async createUser(@requestBody() user: User): Promise<User> {
    return await this.userRepository.create(user);
  }

  @post('/users/login')
  async login(@requestBody() credentials: Credentials) {
    if (!credentials.username || !credentials.password) throw new HttpErrors.BadRequest('Missing Username or Password');
    const user = await this.userRepository.findOne({ where: { id: credentials.username } });
    if (!user) throw new HttpErrors.Unauthorized('Invalid credentials');

    const isPasswordMatched = user.password === credentials.password;
    if (!isPasswordMatched) throw new HttpErrors.Unauthorized('Invalid credentials');

    const tokenObject = { username: credentials.username };
    const token = await signAsync(tokenObject, JWT_SECRET);
    const roles = await this.userRoleRepository.find({ where: { userId: user.id } });
    const { id } = user;

    return {
      token,
      id: id as string,
      roles: roles.map(r => r.roleId),
    };
  }
}
