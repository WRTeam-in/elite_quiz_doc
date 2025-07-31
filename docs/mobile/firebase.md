---
sidebar_position: 4
---

# Authentication Setup

Before you begin, make sure you have completed the initial [Common Firebase Configuration](link to common firebase configuration section).

**Prerequisites:**

- You should have already changed your app’s package name.
- If using the FlutterFire CLI, ensure it is installed and you are logged in.

## Quick Setup with FlutterFire CLI

The FlutterFire CLI depends on the Firebase CLI.

**Install the FlutterFire CLI if not already done so**

run the following command in terminal to install

```sh
dart pub global activate flutterfire_cli
```

1. Go to your Firebase project settings and copy your Project ID.
2. In your terminal, run:
   ```sh
   flutterfire --configure project=<your-project-id>
   ```
3. Follow the prompts to complete the configuration.

## Manual Firebase Setup

### Add Your Android App

1. In the Firebase console, click the Android icon to add a new app.
2. Enter your app’s package name (as configured earlier).
3. Optionally, add an app nickname.
4. Click **Register app**.

![Add Android](/img/app/addAndroid.webp)

6. Download the `google-services.json` file.
7. Click **Next** and follow the remaining setup steps.

![Add Android 2](/img/app/addAndroid2.webp)
![Add Android 3](/img/app/addAndroid3.webp)
![Add Android 4](/img/app/addAndroid4.webp)
![Add Android 5](/img/app/addAndroid5.webp)
![Add Android 6](/img/app/addAndroid6.webp)

8. Place `google-services.json` in your Flutter project at `android/app/`.

### Add Your iOS App

1. In the Firebase console, click the iOS icon to add a new app.
2. Enter your app’s Bundle ID (found in `ios/Runner.xcodeproj/project.pbxproj`).
3. Optionally, add an app nickname and App Store ID.
4. Click **Register app**.

![Add iOS](/img/app/addIos.webp)

5. Download the `GoogleService-Info.plist` file.
6. Click **Next** and follow the remaining setup steps.

![Add iOS 2](/img/app/addIos2.webp)
![Add iOS 3](/img/app/addIos3.webp)
![Add iOS 4](/img/app/addIos4.webp)
![Add iOS 5](/img/app/addIos5.webp)
![Add iOS 6](/img/app/addIos6.webp)

7. Place `GoogleService-Info.plist` in your Flutter project at `ios/Runner/`.

---

## Understanding App Flow and Authentication

Before moving forward, let’s clarify how the app and authentication process work. Most login issues reported to support are due to configuration errors—not problems with the app, web, or admin panel code.

To help you avoid these common pitfalls, we’ll explain the key concepts and flow. Please review this section carefully, as it’s essential for a smooth setup and successful authentication.

---

## Test Your Firebase Integration

After setup, restart your app and test:

1. User registration and login
2. Social authentication (Google, Apple etc.)
3. Real-time battle functionality

If you encounter issues, check both the Firebase console and your app logs for error details.
