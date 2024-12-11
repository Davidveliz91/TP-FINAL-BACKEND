import { Router } from "express";
import { getAllCars, addCar, updateCar, deleteCar } from "../controllers/carsController.js"

const carsRouter = Router()

carsRouter.get("/", getAllCars)
carsRouter.post("/", addCar)
carsRouter.patch("/:id", updateCar)
carsRouter.delete("/:id", deleteCar)

export { carsRouter }