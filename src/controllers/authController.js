import AuthModel from "../models/authModel.js"
import jwt from "jsonwebtoken"

process.loadEnvFile()
const JWT_SECRET = process.env.JWT_SECRET

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body
    if (!username || !password || !email) {
      return res.status(400).json({ error: "Error de registro, datos invalidos" })
    }

    const newUser = await AuthModel.register({ username, password, email })
    if (newUser === null) {
      return res.status(400).json({ error: "Datos Existentes" })
    }

    res.status(201).json(newUser)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "internal server error" })
  }
}
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Credenciales requeridas" });
    }

    const user = await AuthModel.login({ username, password });

    if (!user) {
      return res.status(401).json({ message: "Credenciales invalidas" });
    }

    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({ message: "Logueado exitosamente", user: { id: user._id, username: user.username }, token });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

export { register, login }