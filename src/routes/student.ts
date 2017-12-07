import * as express from "express";
import { StudentsController } from "../controllers/student";

export const router = express.Router();

router.post("/login", StudentsController.studentLogin);


