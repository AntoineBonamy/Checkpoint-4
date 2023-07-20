const fs = require("fs");

const uploadShipSkin = (req, res) => {
  const { originalname } = req.file;
  const { filename } = req.file;

  fs.rename(
    `../Frontend/src/01.assets/img/${filename}`,
    `../Frontend/src/01.assets/img/${originalname}`,
    (err) => {
      if (err) throw err;
    }
  );
  res.status(200).send("file uploaded");
};

module.exports = { uploadShipSkin }