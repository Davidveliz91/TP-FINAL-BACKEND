import express from "express"
import { carsRouter } from "./src/routes/carsRouter.js"
import { connectDB } from "./src/config/mongo.js"
import { authRouter } from "./src/routes/authRouter.js"
process.loadEnvFile()

const PORT = process.env.PORT

const app = express()
app.use(express.json())


connectDB()

app.use("/api/cars", carsRouter);
app.use("/api/auth", authRouter)

app.listen(PORT, () => {
   console.log(" Servidor en escucha por el puerto http://localhost:" + PORT)
})
