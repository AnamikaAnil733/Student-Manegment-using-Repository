import express, { Request, Response } from "express";
import { StudentController } from "../controllers/student/studentcontrollers";

const studentController = new StudentController();
const router = express.Router();

router.post("/register", (req, res) => studentController.register(req, res));
router.post('/login', (req: Request, res: Response) => studentController.login(req, res));

router.put("/update/:id", (req, res) => studentController.update(req, res));

export default router;
