const {ImageKit} = require("@imagekit/nodejs")

const cloudImg = new ImageKit({
    PrivateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFiles(buffer){

    const response = await cloudImg.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.jpg",
        folder:"/Insta-Clone"
    })

    return response

}

module.exports = uploadFiles