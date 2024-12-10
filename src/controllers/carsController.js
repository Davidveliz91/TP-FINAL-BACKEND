import Car from "../models/carsModel.js"

const getAllCars = async (req, res) => {
    try{
const cars =  await Car.getAllCars()
res.json (cars)
    } catch (error){
res.status(500).json({ status: 500, error: error.message })
    }

}
const addCar = async (req, res) => {
    const { make, model, year, price } = req.body
    try{
const newCar = await Car.addCar({ make, model, year, price })
res.status(201).json(newCar)
    } catch (error){
        res.status(500).json({ status: 500, error: error.message })
    }
}
export { getAllCars, addCar }