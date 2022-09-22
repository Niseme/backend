import express, { application } from "express";
import {postRegistration,postLogin} from "../controllers/authController.js";

const router = express.Router();


router.post("/registration", postRegistration);
router.post("/login", postLogin);

export default router;