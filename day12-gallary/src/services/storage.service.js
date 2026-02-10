const { ImageKit } = require("@imagekit/nodejs")

const imgService = new ImageKit({
    privateKey:process.env.IMAGE_KIT_KEY
})

async function upLoadFile(buffer){
    
    const responce = await imgService.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })

    return responce
}

module.exports = upLoadFile