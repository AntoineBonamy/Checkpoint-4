const express = require("express");

const router = express.Router();

const spaceshipController = require("../controller/spaceship.controller");

router.get("/api/spaceship", spaceshipController.getShips);
router.get("/api/spaceship/:id", spaceshipController.getShipsById);
router.post("/api/spaceship/create", spaceshipController.createShip);
router.put("/api/spaceship/update/:id", spaceshipController.updateShip);
router.delete("/api/spaceship/delete/:id", spaceshipController.deleteShip);


module.exports = router;