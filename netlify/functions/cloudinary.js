import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Log the environment variables to ensure they are being read correctly
console.log("Cloudinary Cloud Name:", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
console.log("Cloudinary API Key:", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
console.log("Cloudinary API Secret:", process.env.CLOUDINARY_API_SECRET);

export default async function handler(req, res) {
  try {
    const { folder, limit } = req.query;

  console.log("RIPPA");
    if (!folder) {
      return res.status(400).json({ error: "Folder parameter is required" });
    }

    let searchQuery = cloudinary.search
      .expression(`folder:${folder}`)
      .sort_by("public_id", "desc");

    if (limit && !isNaN(parseInt(limit))) {
      searchQuery = searchQuery.max_results(parseInt(limit));
    }

    const { resources } = await searchQuery.execute();

    const images = resources.map((resource) => resource.secure_url);
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
}
