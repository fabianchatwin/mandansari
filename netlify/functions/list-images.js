const fetch = require('node-fetch');

module.exports.handler = async (event, context) => {
  const accountId = 'db16718a70171a2e2820a166003ad9ba';
  const apiKey = process.env.CLOUDFARE_R2_APIKEY;

  const bucketName = event.queryStringParameters.bucketName;

  if (!bucketName) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Bucket name is required' }),
    };
  }

  const bucketBaseUrl = `https://${bucketName}.fafalala.org`;

  const apiUrl = `https://api.cloudflare.com/client/v4/accounts/${accountId}/r2/buckets/${bucketName}/objects`;
//  const apiUrl = `https://api.cloudflare.com/client/v4/accounts/${accountId}/r2/buckets/${bucketName}/objects?cursor=1-JTdCJTIydiUyMiUzQTElMkMlMjJzdGFydEFmdGVyJTIyJTNBJTIySU1HXzQ3Nzlfa25rZnd5LmpwZyUyMiUyQyUyMnV1aWQlMjIlM0ElMjI3ZTZmYmMwMDEwNjljY2IxYjYxMjMyZTk5YWE4MjQ3MiUyMiU3RA==`;
//  const apiUrl = `https://api.cloudflare.com/client/v4/accounts/${accountId}/r2/buckets/${bucketName}/objects?cursor=1-JTdCJTIydiUyMiUzQTElMkMlMjJzdGFydEFmdGVyJTIyJTNBJTIySU1HXzQ4MjRfbTV0aHVsLmpwZyUyMiUyQyUyMnV1aWQlMjIlM0ElMjI3ZTZmYmJmZmZiMzdkZmUzNGIyNGQ2MmEzMTNkYzNkOCUyMiU3RA==`;

  
let imageUrls = [];
  try {


    const fetchObjects = async (url) => {

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      });


      if (response.ok) {
        const data = await response.json();
        console.log('is_truncated:', data.result_info);

        imageUrls = imageUrls.concat(
          data.result.map(item => `${bucketBaseUrl}/${item.key}`)
        );

        if (data.result_info) {
          if (data.result_info.is_truncated && data.result_info.cursor) {
            const nextUrl = `${apiUrl}?cursor=${encodeURIComponent(data.result_info.cursor)}`;
            await fetchObjects(nextUrl); 
          }
      }

      } else {
        console.error('Error fetching objects:', response.statusText);
        throw new Error(`Failed to fetch objects: ${response.statusText}`);
      }
    };


        // Initiate fetching
        await fetchObjects(apiUrl);

        // Sort image URLs alphabetically
        imageUrls.sort();

    return {
      statusCode: 200,
      body: JSON.stringify(imageUrls),
    };

  } catch (error) {
    console.error('Error fetching images:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
