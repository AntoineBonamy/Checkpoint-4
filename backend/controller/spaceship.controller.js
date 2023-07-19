const database = require("../database");

const getShips = (req, res) => {
    database
        .query("SELECT * FROM spaceship")
        .then(([spaceships]) => res.json(spaceships))
        .catch((err) => {
            console.error(err);
            res.statsu(500).send("Error getting ships")
        })
}

const getShipsById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    database
        .query("SELECT * FROM spaceship WHERE spaceship.id = ?", [id])
        .then(([spaceship]) => res.json(spaceship))
        .catch((err) => {
            console.error(err);
            res.statsu(500).send("Error getting ships")
        })
}

const createShip = (req, res) => {
    const {name, description, lightspeed, state, skin} = req.body;

    database
        .query("INSERT INTO spaceship (name, description, lightspeed, state, skin) VALUES (?,?,?,?,?)", [name, description, lightspeed, state, skin])
        .then(([result]) => {
            res.location(`/api/spaceship/${result.insertId}`).sendStatus(201);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Post request failed")
        })
}

const updateShip = (req, res) => {
    const {name, description, lightspeed, state, skin} = req.body;
    const id = parseInt(req.params.id, 10);

    database
        .query("UPDATE spaceship SET name = ?, description = ?, lightspeed = ?, state = ?, skin = ? WHERE id = ?", [
            name, description, lightspeed, state, skin, id
        ])
        .then(([result]) => {
            if (result.affectedRows === 0) {
                res.status(404).send("Not Found");
            } else {
                res.status(204).send("Data update success");
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error updating the spaceship")
        })

}

const deleteShip = (req, res) => {
    const id = parseInt(req.params.id, 10);

    database
        .query("DELETE FROM spaceship WHERE id = ?", [id])
        .then(([result]) => {
            if (result.affectedRows === 0) {
                res.status(404).send("Not Found");
            } else {
                res.status(204).send("Data delete success");
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error deleting the spaceship")
        })
}

module.exports = {
    getShips,
    getShipsById, 
    createShip,
    updateShip,
    deleteShip
}