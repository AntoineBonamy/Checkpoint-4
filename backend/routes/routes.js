const express = require("express");
const multer = require("multer");

const router = express.Router();
const uploadShipSkin = multer({ dest: "../Frontend/src/01.assets/img"});

const spaceshipController = require("../controller/spaceship.controller");
const userController = require("../controller/user.controller");

const uploadController = require("../controller/upload.controller");

// Login

router.post("/api/login", userController.getUserByEmail);

// Register

router.post("/api/register", userController.registerUser);

// CRUD spaceship

router.get("/api/spaceship", spaceshipController.getShips);
router.get("/api/spaceship/:id", spaceshipController.getShipsById);
router.post("/api/spaceship/create", spaceshipController.createShip);
router.put("/api/spaceship/update/:id", spaceshipController.updateShip);
router.delete("/api/spaceship/delete/:id", spaceshipController.deleteShip);

// upload ship' skin

router.post("/api/uploadskin", uploadShipSkin.single("skin"), uploadController.uploadShipSkin)

module.exports = router;