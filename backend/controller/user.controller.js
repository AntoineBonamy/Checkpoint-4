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

module.exports = {
    getUserByEmail
}