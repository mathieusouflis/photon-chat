import { authLogin, authRegister } from "../controllers/auth.js"

import express from "express"
const router = express.Router()


router.post("/register", authRegister)
router.post("/login", authLogin)

export default router