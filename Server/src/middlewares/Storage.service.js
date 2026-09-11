import "dotenv/config";
import Imagekit from 'imagekit'

const storageInstance = new Imagekit({
    urlEndpoint: process.env.IK_URL_ENDPOINT,
    publicKey: process.env.IK_PUBLIC_KEY,
    privateKey: process.env.IK_PRIVATE_KEY

})



const uploadFiles = async (file, fileName) => {

    try {
        console.log("uplode started 1 ");

        const obj = {
            file,
            fileName,
            folder: 'post-images'
        }

        console.log("sending for upload");


        const result = await storageInstance.upload(obj)


        return result


    } catch (error) {
        console.error("imagekit error", error)
            ;

    }
}

export default uploadFiles
