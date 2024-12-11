import mongoose from "mongoose"

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, {
  versionKey: false
})

const Car = mongoose.model("car", carSchema)

const getAllCars = async () => {
  try {
    const Cars = await Car.find()
    return Cars
  } catch (error) {
    throw new Error("Error al obtener listado de autos")
  }
}

const addCar = async (dataCar) => {
  try {
    const newCar = new Car(dataCar)
    await newCar.save()
    return newCar
  } catch (error) {
    throw new Error("Error al ingresar auto")
  }
}
const updateCar = (id, updateCar) => {
  return Car.findByIdAndUpdate(id, updateCar)
}

const deleteCar = (id) => {
  const response = Car.findOneAndDelete(id)
  return response
}

export default { getAllCars, addCar, updateCar, deleteCar }