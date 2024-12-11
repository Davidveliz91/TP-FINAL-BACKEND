import { Router } from "express";
import { getAllCars, addCar, updateCar, deleteCar } from "../controllers/carsController.js"
import { auth } from "../middleware/authMiddleware.js";

const carsRouter = Router()

carsRouter.get("/", auth, getAllCars)
carsRouter.post("/", auth, addCar)
carsRouter.patch("/:id", auth, updateCar)
carsRouter.delete("/:id", auth, deleteCar)

export { carsRouter }