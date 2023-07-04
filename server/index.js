const cloudinary = require('cloudinary').v2;
// should make .env process variables accessible 
require('dotenv').config();

cloudinary.config({ 
        cloud_name: 'du1rn35uq', 
        api_key: '127717317775552', 
        api_secret: 'x6elcsw26HekfctU0w_rjstd7fY' 
})


console.log(cloudinary.config())


// uploads the image file 
const uploadImage = async (imagePath) => {

    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true
    };

    try {
        // upload image
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    return result.public_id;
    } catch (error) {
        console.error(error)
    }
}

/// get and use detail sof the image
const getAssetInfo = async (publicId) => {
    // return colors in the response 
    const options = {
        colors: true
    };

    try {
        // get details about the asset
        const result = await cloudinary.api.resource(publicId, options);
        console.log(result);
        return result.colors
    } catch (error) {
        console.error(error)
    }
}

// creates HTML image tag
const createImageTag = (publicId, ...colors) => {

    // Set the effect color and background color
    const [effectColor, backgroundColor] = colors;

    // Create an image tag with transformations applied to the src URL
    let imageTag = cloudinary.image(publicId, {
      transformation: [
        { width: 250, height: 250, gravity: 'faces', crop: 'thumb' },
        { radius: 'max' },
        { effect: 'outline:10', color: effectColor },
        { background: backgroundColor },
      ],
    });

    return imageTag;
};

// run code
(async () => {
    // Set the image to upload
    const imagePath = 'https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.jpg';

    // Upload the image
    const publicId = await uploadImage(imagePath);

    // Get the colors in the image
    const colors = await getAssetInfo(publicId);

    // Create an image tag, using two of the colors in a transformation
    const imageTag = await createImageTag(publicId, colors[0][0], colors[1][0]);

    // Log the image tag to the console
    console.log(imageTag);

})();