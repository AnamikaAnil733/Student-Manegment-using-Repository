import express from "express";
import { AdminController } from "../controllers/admin/AdminControllers";

const adminController = new AdminController();
const router = express.Router();

router.post("/login", (req, res) => adminController.login(req, res));
router.get("/students", (req, res) => adminController.getStudents(req, res));
router.put("/students/:id", (req, res) => adminController.updateStudent(req, res));
router.delete("/students/:id", (req, res) => adminController.deleteStudent(req, res));

export default router;
