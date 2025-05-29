import { IUser } from "../../interfaces/Iuser";
import { UserModel } from "../../models/UserModel";

export class AdminRepository {
  async findByEmail(email: string): Promise<IUser | null> {
    return await UserModel.findOne({ email, role: "admin" });
  }

  async listStudents(): Promise<IUser[]> {
    return await UserModel.find({ role: "student" });
  }

  async updateStudent(id: string, data: Partial<IUser>): Promise<IUser | null> {
    return await UserModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteStudent(id: string): Promise<IUser | null> {
    return await UserModel.findByIdAndDelete(id);
  }
}
