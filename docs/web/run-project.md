---
sidebar_position: 4
---

# Running the Project

## Step-by-Step Process

1. Unzip the downloaded code. After unzipping you will have Elite Quiz - Web Code folder.
   Open it in Visual Studio Code.

2. Open VS Code terminal by typing **CTRL+J** in Windows/Linux, and for MacOS **CMD+J** and execute the command:

   ```bash
   npm i
   ```

   This will take some time to download the necessary packages, so wait for a few minutes.

3. After `npm i` finishes, run this command:
   ```bash
   npm run dev
   ```
   This command will start the development mode. Check if everything is working fine, then you're good to go ahead.

## Available Commands

Elite Quiz provides several NPM scripts that you can use:

| Command          | Description                            |
| ---------------- | -------------------------------------- |
| `npm run dev`    | Starts the development server          |
| `npm run build`  | Builds the app for production          |
| `npm run export` | Creates optimized files for deployment |
| `npm start`      | Runs the built app in production mode  |

## Development vs Production

- **Development mode** provides features like hot reloading, detailed error messages, and development tools that help with debugging.
- **Production mode** optimizes the application for performance by minifying code, optimizing assets, and disabling development features.

## Testing Your Changes

After making changes to the code, you should test them thoroughly:

1. Test all affected features
2. Verify responsive design on different screen sizes
3. Check for any console errors
4. Test on different browsers if possible

## Development Tips

- Keep the browser console open to catch any JavaScript errors
- Use the React Developer Tools browser extension for debugging
- Make small, incremental changes and test frequently
- Follow the existing code style and patterns
