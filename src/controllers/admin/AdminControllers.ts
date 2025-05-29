import { Request, Response } from "express";
import { UserService } from "../../services/student/UserService";

export class AdminController {
  constructor(private userService = new UserService()) {}

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await this.userService.login(email, password);
    if (!user || user.role !== "admin") {
       res.status(401).json({ message: "Invalid credentials or not an admin" });
    }
    res.json(user);
  }

  async getStudents(req: Request, res: Response) {
    const students = await this.userService.getAllStudents();
    res.json(students);
  }

  async updateStudent(req: Request, res: Response) {
    const student = await this.userService.updateStudent(req.params.id, req.body);
    res.json(student);
  }

  async deleteStudent(req: Request, res: Response) {
    const student = await this.userService.deleteStudent(req.params.id);
    res.json(student);
  }
}
