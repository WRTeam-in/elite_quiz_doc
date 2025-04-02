---
sidebar_position: 1
---

# Setting Up the Web Version

## Prerequisites

Before you begin setting up the Elite Quiz web version, ensure you have the following prerequisites installed:

- **Node.js**: Version 18 or later is required
  - [Download Node.js](https://nodejs.org/en/download)
  - [Step-by-step guide to install Node.js](https://www.wrteam.in/blog/step-by-step-guide-to-install-nodejs-on-windows-mac/)

:::info Note
You must install Node.js version 18 or later for the web application to function properly.
:::

## Installation Resources

### Setup Video Tutorials

For visual guidance on setting up the web version, you can refer to the following video tutorials:

- [Firebase Configuration Tutorial](https://www.youtube.com/watch?v=adrnST-IrgU)

## Web Version Setup Process

Follow these steps to set up the Elite Quiz web version:

1. **Extract the Files**:

   - Unzip the downloaded code. This will create an "Elite Quiz - Web Code" folder.
   - Open this folder in Visual Studio Code or your preferred code editor.

2. **Install Dependencies**:

   - Open the terminal in VS Code by pressing **CTRL+J** (Windows/Linux) or **CMD+J** (MacOS)
   - Execute the command: `npm i`
   - This will download and install all required packages. The process may take several minutes to complete.

3. **Run Development Server**:

   - After the installation is complete, run the command: `npm run dev`
   - This will start the application in development mode.
   - Verify that everything is working correctly in your browser.

4. **Setting Environment Variables**:
   - Before the web application can fully function, you'll need to configure various environment variables.
   - These are covered in the following documentation sections:
     - [Setting API URL](./api-url.md)
     - [Firebase Integration](./firebase-integration.md)
     - [Cloud Firestore](./cloud-firestore.md)
     - [App Customization](./app-customization.md)

## Next Steps

Once you've completed the basic setup:

1. Set up Firebase integration for authentication and database
2. Configure your application settings
3. Customize the appearance
4. Deploy your application to a production server

Check the sidebar for detailed guides on each of these steps.
