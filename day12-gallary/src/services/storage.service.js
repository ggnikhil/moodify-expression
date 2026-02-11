const {ImageKit}  = require("@imagekit/nodejs")

const cloudImg = new ImageKit({
    privateKey: process.env.IMAGE_KIT_KEY
})

async function uploadFile(buffer){

    const responce = await cloudImg.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.jpg"
    })

    return responce
}


module.exports = uploadFile