import { create } from "../controllers/message.js"
import express from "express"

import {tokenAuthorization} from "../middleware/tokenAuthorization.js"

const router = express.Router()

router.post("/create", tokenAuthorization, create)

export default router