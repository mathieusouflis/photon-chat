import { create, join } from "../controllers/room.js"
import express from "express"

import {tokenAuthorization} from "../middleware/tokenAuthorization.js"


const router = express.Router()

router.post("/create", tokenAuthorization, create)
router.post("/join", tokenAuthorization, join)
export default router