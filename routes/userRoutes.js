const express = require("express")
const {
    createUser,
    getAllUser, 
    getUserById, 
    updateUser, 
    deleteUser
} = require("../controllers/userController")
const route = express.Router()

route.post("/users", createUser)

route.get("/users", getAllUser)

route.get("/users/:id", getUserById)

route.patch("/users/:id", updateUser)

route.delete("/users/:id", deleteUser)

module.exports = route