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
      .sort_by("public_id", "desc");

    if (limit && !isNaN(parseInt(limit))) {
      searchQuery = searchQuery.max_results(parseInt(limit));
    }

    const { resources } = await searchQuery.execute();

    const images = resources.map((resource) => resource.secure_url);
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
