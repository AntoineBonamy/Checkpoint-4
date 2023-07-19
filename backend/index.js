require("dotenv").config();
const app = require("./app");

app.listen(process.env.APP_PORT, (err) => {
    if (err) {
        console.error("Something bad happened");
    } else {
        console.info(`Server is listening on ${process.env.APP_PORT}`)
    }
});