const database = require("../database");

const getUserByEmail = (req, res) => {
    const { email, password } = req.body;

    database
        .query("SELECT * FROM user WHERE email = ? AND password = ?", [email, password])
        .then(([user]) => {
            if(user[0] != null) {
                req.user = user[0];
                res.sendStatus(200);
            } else {
                res.sendStatus(401);
            }
        })
        .catch(() => {
            res.status(500).send("Connexion failed");
        })
}

const registerUser = (req, res) => {
    const {name, email, password} = req.body;

    database
        .query("INSERT INTO user(name, email, password) VALUES (?,?,?)", [name, email, password])
        .then(([user]) => {
            res.status(201).location(`api/user/${user.insertId}`).send("Success")
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error register the user")
        });
}

module.exports = {
    getUserByEmail,
    registerUser
}