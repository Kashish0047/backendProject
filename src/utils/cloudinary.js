import {v2 as cloudinary} from "cloudinary"// helps in image uploading using multer
import fs from "fs" // helps to read,remove,write files


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFile) => {
     try{
        if(!localFile) return null;
        //upload
        const response = await cloudinary.uploader.upload(localFile,{
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log("file has been uploaded on cloudinary", response.url);
        fs.unlinkSync(localFilePath)
        return response;

     } catch (error){
        fs.unlinkSync(localFile) // remove the locally saved temporary file as the operation got failed
        return null
     }
}

export {uploadOnCloudinary};