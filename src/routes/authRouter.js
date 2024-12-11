import { Router } from "express";
import { register, login } from "../controllers/authController.js"
import { auth } from "../middleware/authMiddleware.js";

const authRouter = Router()

authRouter.post("/register", register)
authRouter.post("/login", login)

export { authRouter }