import { UserRepository } from "../../repositories/student/UserRepository";
import { IUser } from "../../interfaces/Iuser";

export class UserService {
  constructor(private userRepo = new UserRepository()) {}

  createUser(user: IUser) {
    return this.userRepo.create(user);
  }

  login(email: string, password: string):any {
    return this.userRepo.findByEmail(email).then(user =>
      user && user.password === password ? user : null
    );
  }

  getAllStudents() {
    return this.userRepo.findAllStudents();
  }

  updateStudent(id: string, data: Partial<IUser>) {
    return this.userRepo.update(id, data);
  }

  deleteStudent(id: string) {
    return this.userRepo.delete(id);
  }
}
