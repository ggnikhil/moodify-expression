const {ImageKit} = require("@imagekit/nodejs")

const cloudImg = new ImageKit({
    PrivateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFiles(buffer){

    const response = await cloudImg.files.upload({
        file:buffer.toString("base64"),
        fileName:"file",
        folder:"/Insta-Clone"
    })
    return response

}

module.exports = uploadFiles