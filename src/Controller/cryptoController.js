const axios = require("axios");
const cryptoModel = require("../Model/cryptoModel");


const getCrypto = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: "https://api.coincap.io/v2/assets",
            headers: {
                Authorization: "Bearer  5a3c9f61-7b40-4b2c-812c-e3dd9828c119"
            }
        }

        let result = await axios(options)

        let data = result.data.data

        let sortData = data.sort((Currency1, Currency2) => { return Currency1.changePercent24Hr - Currency2.changePercent24Hr })

        await cryptoModel.deleteMany()

        await cryptoModel.create(sortData)

        let getData = await cryptoModel.find().select({__v:0, _id:0})

        return res.status(200).send({ status: true, data: getData });
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}


module.exports.getCrypto = getCrypto