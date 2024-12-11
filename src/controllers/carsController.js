import carsModel from "../models/carsModel.js";
import Car from "../models/carsModel.js"

const getAllCars = async (req, res) => {
    try {
        const cars = await Car.getAllCars();
        res.json(cars)
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message })
    }

}
const addCar = async (req, res) => {
    const { make, model, year, price } = req.body
    try {
        const newCar = await Car.addCar({ make, model, year, price })
        res.status(201).json(newCar)
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message })
    }
}

const updateCar = async (req, res) => {
    try {
        const { id } = req.params
        const { body } = req
        const car = await carsModel.updateCar(id, body);
        if (!car) return res.status(404).json({ message: 'automovil no encontrado' });
        res.json(car);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el automovil' });
    }
}

const deleteCar = async (req, res) => {
    try {
        const { id } = req.params
        const car = await carsModel.deleteCar(id);
        if (!car) return res.status(404).json({ message: 'Automovil no encontrado' });
        res.json(car);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el automovil' });
    }
}

export { getAllCars, addCar, updateCar, deleteCar }