import express from "express";
import {
  level1_login,
  level1_register,
  level23_register,
  level2_login,
  level3_login,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register_level1", level1_register);
router.post("/register_level23", level23_register);

router.post("/login_level1", level1_login);
router.post("/login_level2", level2_login);
router.post("/login_level3", level3_login);

export default router;
