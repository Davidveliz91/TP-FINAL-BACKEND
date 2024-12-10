import mongoose from "mongoose"

const carsSchema = new mongoose.Schema({
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
        min: 1960, 
        max: 2000,
      },
      price: {
        type: Number,
        required: true,
      }
})

const Car = mongoose.model ("car", carsSchema)

const getAllCars = async () => {
    try{
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
} catch(error){
throw new Error ("Error al ingresar auto")
}
}
export default { getAllCars, addCar}