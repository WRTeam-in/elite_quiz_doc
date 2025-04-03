---
sidebar_position: 10
---

# Deploying the Web Application

This guide will walk you through the process of deploying your Elite Quiz web application to a production server.

## Building for Production

1. After all the changes, you are ready to deploy your Web application on a Live Server.

2. Open VS Code terminal by typing **CTRL+J** in Windows/Linux, or **CMD+J** for MacOS and execute the command:

   ```bash
   npm run export
   ```

   This will take a few seconds to build the live and optimized version of the web application.

3. After the process completes, go to web's code root files -> out folder and upload these files to your live server.

   :::caution Important
   Only upload the **out** folder's files on the server. Do not upload any other files to the server.
   :::

4. If you're facing any deployment-related problems, you can follow the official documentation: [Next.js Web Deployment](https://nextjs.org/docs/pages/building-your-application/deploying)

## How to Update to a New Version

If you need to update your web application to a new version:

1. Extract the zip file of web code which you get from CodeCanyon.
2. Open the web code in VS Code editor.
3. Download Node.js (version 20) from [here](https://nodejs.org/en/download/prebuilt-installer) if not already installed.
4. Open the .env file in your project.
5. Add your admin URL and web URL as per the documentation.
6. Add your title, description, keywords, and other details in the .env file.
7. Run the command: `npm i` in your terminal.
8. Run the command: `npm run export` to build your project.
9. After the `out` folder is created, make a zip of the `out` folder and upload the contents inside the `out` folder to your web domain or subdomain server.

## Deployment Options

### Traditional Web Hosting

1. Upload the contents of the `out` folder to your web server using FTP or SSH
2. Configure your web server to serve the files correctly

### Deployment Platforms

Elite Quiz can be deployed on various platforms:

- **Vercel**: Optimal for Next.js applications
- **Netlify**: Easy deployment with continuous integration
- **Firebase Hosting**: Fast and secure hosting with good integration with other Firebase services
- **GitHub Pages**: Free hosting for static websites
- **AWS S3 + CloudFront**: Scalable and high-performance option

## Post-Deployment Verification

After deploying, verify the following:

1. The site loads correctly at your domain
2. User authentication works properly
3. API calls are successful
4. All features function as expected
5. No console errors appear
6. The site is responsive on different devices

## Setting Up a Custom Domain

If you're using a custom domain:

1. Purchase a domain from a domain registrar
2. Configure your DNS settings to point to your hosting provider
3. Add SSL certificate for HTTPS (many hosting providers offer this automatically)

