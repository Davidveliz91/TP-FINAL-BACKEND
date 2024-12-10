import { Router } from "express";
import { getAllCars, addCar } from "../controllers/carsController.js"


const carsRouter = Router()

carsRouter.get("/", getAllCars)
carsRouter.post("/", addCar)

export { carsRouter }