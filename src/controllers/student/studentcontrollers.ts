import { Request, Response } from "express";
import { UserService } from "../../services/student/UserService";

export class StudentController {
  constructor(private userService = new UserService()) {}

  async register(req: Request, res: Response) {
    const user = await this.userService.createUser({ ...req.body, role: "student" });
    res.status(201).json(user);
  }

  async login(req: Request, res: Response):Promise<void> {
    const { email, password } = req.body;
    const student = await this.userService.login(email, password);
    if (!student || student.role !== "student") {
      throw new Error("Invalid Credentials")
    }
    res.json(student);
  }

  async update(req: Request, res: Response) {
    const student = await this.userService.updateStudent(req.params.id, req.body);
    res.json(student);
  }
}
