export interface IUser {
  _id?: string;
  username: string;
  email: string;
  password: string;
  role: "admin" | "student";
}
