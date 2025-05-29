import { AdminRepository } from "../../repositories/admin/AdminRepository";

export class AdminService {
  constructor(private repo: AdminRepository) {}

  login(email: string, password: string):any {
     return this.repo.findByEmail(email).then(user =>
      user && user.password === password ? user : null
    );
  }

  listStudents() {
    return this.repo.listStudents();
  }

  updateStudent(id: string, data: any) {
    return this.repo.updateStudent(id, data);
  }

  deleteStudent(id: string) {
    return this.repo.deleteStudent(id);
  }
}
