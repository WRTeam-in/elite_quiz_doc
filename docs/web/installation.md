---
sidebar_position: 2
---

# Installation Guide

This guide provides a detailed walkthrough of the installation process for the Elite Quiz web application.

## Installation Video Tutorial

To help you get started quickly, we have created a video tutorial that guides you through the installation and setup process:

- [Firebase Configuration Video Tutorial](https://www.youtube.com/watch?v=adrnST-IrgU)

## System Requirements

Before proceeding with the installation, make sure your system meets the following requirements:

1. **Node.js**: Version 18 or later

   - [Download Node.js](https://nodejs.org/en/download)
   - [Step-by-step guide to install Node.js](https://www.wrteam.in/blog/step-by-step-guide-to-install-nodejs-on-windows-mac/)

2. **npm**: Usually comes bundled with Node.js

3. **Modern web browser**: Chrome, Firefox, Safari, or Edge

4. **Code editor**: Visual Studio Code (recommended)

## Installation Steps

### 1. Extract the Project Files

Unzip the downloaded code package. This will create an "Elite Quiz - Web Code" folder.

### 2. Open the Project

Launch Visual Studio Code (or your preferred code editor) and open the project folder.

### 3. Install Dependencies

Open the terminal in VS Code by pressing:

- **CTRL+J** on Windows/Linux
- **CMD+J** on MacOS

Then run the following command to install all required dependencies:

```bash
npm i
```

This will take some time to download and install all necessary packages. Please be patient during this process.

### 4. Configure Environment Variables

Open the `.env` file in the root directory of your project and set the following variables:

- Set your admin panel URL
- Set your web app URL
- Configure SEO meta tags (title, description, keywords)

For example:

```
NEXT_PUBLIC_ADMIN_URL=https://admin.yourdomain.com
NEXT_PUBLIC_WEB_APP_URL=https://yourdomain.com
```

### 5. Start the Development Server

Once all dependencies are installed, you can start the development server by running:

```bash
npm run dev
```

This will launch the development server, and your application should be accessible at `http://localhost:3000`.

## Troubleshooting

If you encounter any issues during the installation:

1. Make sure you have the correct version of Node.js installed
2. Check that all environment variables are correctly set in the `.env` file
3. Try deleting the `node_modules` folder and running `npm i` again
4. Check your console for specific error messages

## Next Steps

After completing the installation, you'll need to:

1. [Configure API URL](./api-url.md)
2. [Integrate Firebase](./firebase-integration.md)
3. [Enable Firebase Authentication](./firebase-auth.md)
4. [Set up Cloud Firestore](./cloud-firestore.md)
5. [Customize your application](./app-customization.md)
