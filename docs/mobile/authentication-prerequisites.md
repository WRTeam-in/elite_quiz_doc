---
title: Authentication Prerequisites
sidebar_position: 3.5
---

Before setting up authentication for Elite Quiz, it’s essential to understand how SHA keys, keystores, and Firebase configuration work. Most authentication issues are caused by misconfigured keys or outdated configuration files. This guide will help you avoid common pitfalls.

## What Are SHA Keys and Keystores?

- **SHA-1/SHA-256:** Cryptographic signatures used by Firebase to verify your app’s identity, especially for Google Sign-In and Phone Auth.
- **Keystore:** A file that stores cryptographic keys for signing your app. There are two main types:
  - **Debug keystore:** Used for development and testing.
  - **Release keystore:** Used for production builds and Play Store releases.

## When and Why You Need SHA Keys

- **Google Sign-In:** Requires your app’s SHA-1 key to be registered in Firebase.
- **Phone Auth:** Also depends on correct SHA keys.
- **Play Store:** After uploading your app, Google Play will sign it with its own key. You must add the Play Store’s SHA-1 to Firebase for authentication to work in production.

## How to Find Your SHA Keys

- **Debug SHA-1:**
  ```sh
  keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
  ```
- **Release SHA-1:**
  ```sh
  keytool -list -v -keystore <path-to-your-release-keystore> -alias <your-key-alias>
  ```
- **Play Store SHA-1:**
  - In the Play Console, go to **Release > Setup > App integrity** to find the SHA-1 for Google Play App Signing.

## Which Keystore is Being Used?

- **Debug builds** use the debug keystore by default.
- **Release builds** (for production or Play Store) use your release keystore.
- **Check your build variant** in Android Studio or your build command to confirm.

## When to Add or Update SHA Keys in Firebase

- **Initial setup:** Add your debug and release SHA-1 keys to your Firebase project.
- **After Play Store upload:** Add the Play Store SHA-1 key to Firebase.
- **If you change keystores:** Add the new SHA-1 to Firebase.

## Updating google-services.json

- **After adding or changing SHA keys in Firebase, always re-download the latest `google-services.json` from the Firebase console and replace it in your project’s `android/app/` directory.**
- If you update SHA keys after publishing, you must also update the JSON file in your Admin Panel if it uses Firebase services.

## Troubleshooting

- If login or authentication still doesn’t work after updating keys and JSON files:
  1. Double-check all SHA keys are added in Firebase.
  2. Ensure you’re using the correct keystore for your build.
  3. Re-download and replace `google-services.json` everywhere it’s needed (app and admin panel).
  4. Restart your app and test again.

**Tip:** Most authentication issues are due to missing or incorrect SHA keys or outdated configuration files. Review these steps carefully before seeking support.
