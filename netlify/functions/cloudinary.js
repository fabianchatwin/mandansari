// ./netlify/functions/cloudinary.js

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.handler = async function (event, context) {
  try {
    const { folder, limit } = event.queryStringParameters;

    if (!folder) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Folder parameter is required" }),
      };
    }
    
    let searchQuery = cloudinary.search
      .expression(`folder:${folder}`)
      .sort_by("public_id", "asc");
/*      
      .with_field("context")
      .with_field("metadata")
      .with_field("image_metadata");            
*/
    if (limit && !isNaN(parseInt(limit))) {
      searchQuery = searchQuery.max_results(parseInt(limit));
    }

    const { resources } = await searchQuery.execute();

/*
    const images = resources.map((resource) => ({
      url: resource.secure_url,
      taken_at: resource.context && resource.context.custom && resource.context.custom.taken_at
        ? new Date(resource.context.custom.taken_at).getTime()
        : resource.image_metadata && resource.image_metadata.DateTimeOriginal
        ? new Date(resource.image_metadata.DateTimeOriginal).getTime()
        : new Date(resource.created_at).getTime()
    }));

    images.sort((a, b) => a.taken_at - b.taken_at);
    */
   /*
    const watermarkFolders = ["BUFFETPARTY", "DINNER", "KIDS", "GROUPS","LIAFABIAN"];
    const shouldApplyWatermark = watermarkFolders.includes(folder);

    const waterMarkedImages = resources.map((image) => {
      if (shouldApplyWatermark && !image.url.includes("noalice")) {
        return image.url.replace("image/upload/", "image/upload/t_wedding/");
      }
      return image.url;
    });
    */
    const images = resources.map((image) => {
      return image.url;
    });

    return {
      statusCode: 200,
      body: JSON.stringify(images),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch images" }),
    };
  }
};