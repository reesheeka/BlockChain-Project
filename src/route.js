const express = require("express");
const router = express.Router();
const cryptoController = require("./Controller/cryptoController");


router.get("/getCryptoCoins", cryptoController.getCrypto);

router.all('/*', function (req, res) {
    res.status(400).send({ status: false, message: 'Invalid HTTP Request' });
})

module.exports = router