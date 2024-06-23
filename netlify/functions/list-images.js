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

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    if (response.ok) {
      const data = await response.json();

      const imageUrls = data.result
        .map(item => `${bucketBaseUrl}/${item.key}`)
        .sort();      

      return {
        statusCode: 200,
        body: JSON.stringify(imageUrls),
      };
    } else {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: response.statusText }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
