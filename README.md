# Picture Search Application

The Picture Search Application is a web-based tool designed to help developers save and organize links to pictures and images with associated keywords. This application enables developers to quickly reference relevant images, add notes or additional keywords, and easily sort their picture collection for efficient project management. The application is password-protected to ensure data security and privacy.

## Key Features

- **Save and Organize Picture Links**: Developers can save links to pictures and images along with relevant keywords for efficient organization and quick access to visual resources.

- **Add Notes and Keywords**: Developers have the option to add notes and additional keywords to their saved picture links, facilitating comprehensive and personalized data management.

- **Cloudinary Integration**: The application integrates with Cloudinary's uploader widget, enabling developers to upload and store images on their Cloudinary account securely.

## Usage

1. **Accessing the Application**: To access the Picture Search Application, contact via [email](mailto:merel.burleigh@gmail.com).

2. **Password Protection**: The application is password-protected to ensure confidentiality and data security. Developers need to provide the appropriate credentials to log in and access the features.

3. **Saving Picture Links and Keywords**: Once logged in, developers can input links to pictures and images and associate them with relevant keywords. Additionally, developers can add notes for further context.

4. **Uploading to Cloudinary**: After saving the picture link and associated data, developers can use the Cloudinary uploader widget to upload the image to their Cloudinary account securely.

## Installation

To run the Picture Search Application locally, follow these steps:

1. Create an account with Cloudinary and download the code via ZIP file. 

2. Install the required npm packages:

```
npm install
```

3. Set Up Cloudinary Information:

   - Sign up for a Cloudinary account at https://cloudinary.com/
   - Obtain your Cloudinary API key and secret from the Cloudinary dashboard.
   - Replace the placeholder values in the application code with your Cloudinary API key and secret.

## Usage

To start the application, run the following command:

```
npm start
```

The Picture Search Application will be accessible at `http://localhost:3000` in your web browser.

## Deploy with Node.js

To deploy the Picture Search Application, you can use Node.js and a hosting platform of your choice. Here's a general outline of the deployment process:

1. Set up a server or hosting environment for Node.js application deployment.

2. Install Node.js and npm on the server.

3. Clone the repository on the server.

4. Install the required npm packages using `npm install`.

5. Set up the Cloudinary information as described in the "Installation" section.

6. Start the application using a process manager like PM2.

7. Set up a reverse proxy or configure DNS to route traffic to the application.

Please refer to the documentation of your hosting platform for specific deployment instructions.

## Future Developments

The Picture Search Application can be further enhanced with the following features:

1. **Editing Saved Pictures**: Allow developers to edit the information associated with the saved pictures. This includes the ability to modify keywords, update notes, or change the URL of the saved image. Implementing this feature would provide developers with more flexibility and adaptability in managing their visual resources.

2. **Deleting Saved Pictures**: Implement a feature that allows developers to delete saved pictures from their collection. By providing a convenient way to remove unwanted or outdated images, developers can keep their picture search results more relevant and organized.

## Customization

The application is designed with flexibility in mind and can be customized according to individual requirements. Developers can modify the application to use their specific Cloudinary information, enabling seamless integration with their Cloudinary account.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

We extend our gratitude to Cloudinary for their invaluable services, making it possible to enhance the functionality and security of this application.

For any questions, feedback, or issues related to the application, please feel free to reach out to the project maintainer.

