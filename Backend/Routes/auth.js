    import express from "express";
    import { login, register } from "../Controllers/authController.js";

    let route = express.Router()

    route.post("/register", register)

    route.post("/login", login)

    export default route