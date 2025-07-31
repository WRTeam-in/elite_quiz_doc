---
sidebar_position: 3
---

# App Configuration

Once you have set up Flutter and successfully run the project, you can customize the Elite Quiz App to fit your needs.

## Change the Package Name

To update your app's package name, follow this official guide: [How to Change Package Name](https://wrteam-in.github.io/common_app_doc/GeneralSettings/packagename)

**Manual Method:**

1. Open your project in Android Studio or VS Code.
2. Use the "Replace in Files" or "Find and Replace" feature.
3. Search for all instances of `com.wrteam.elitequiz` and replace them with your new package name.

**In VS Code:**

![VS Code Replace Package Name](/img/app/vs_code_replace_pkg_name.webp)

**In Android Studio:**

![Android Studio Replace Package Name](/img/app/studio_replace_pkg_name.webp)

## Change the Application Name

The application name appears below the app icon on user devices.

- **For Android:**
  1. Open `android/app/src/main/AndroidManifest.xml`.
  2. Locate the `android:label` attribute in the `<application>` tag.
  3. Set it to your desired app name:

```xml
<application
    android:label="Your App Name"
    ...>
```

- **For iOS:**
  1. Open `ios/Runner/Info.plist`.
  2. Find the `CFBundleName` key and update its value:

```xml
<key>CFBundleName</key>
<string>Your App Name</string>
```

![Rename App](/img/app/rename_app.webp)

## Update the App Version

Keeping your app version up to date is important for releases and updates.

1. Open `pubspec.yaml` in your project root.
2. Find the `version` property.
3. Update it using the format:

```yaml
version: 1.0.0+1 # version_name+version_code
```

- `1.0.0` is the version name users see.
- `1` is the internal version code (increment for each release).

![Change App Version](/img/app/change_app_version.webp)

## Connect to the Admin Panel

To link your app with your Admin Panel:

1. Open `lib/core/config/config.dart` in your project.
2. Find the `panelUrl` constant and update it with your Admin Panel URL:

```dart
/// Add your panel url here
// NOTE: Do not add '/' at the end of the URL
// NOTE: Check if your admin panel uses http or https
const panelUrl = 'https://your-admin-panel-url.com';
```

## Other Configs

While you are in `config.dart`, you can change the other configurations as well.
like below, and others in the `config.dart` file.

```dart
/// Default App Theme : light or dark
const Brightness defaultTheme = Brightness.light;

// Phone Login, default country code AND max length of phone number allowed
const defaultCountryCodeForPhoneLogin = 'IN';
const maxPhoneNumberLength = 16;

final TextStyle kFonts = GoogleFonts.nunito();
final TextTheme kTextTheme = GoogleFonts.nunitoTextTheme();
```

for changing the default theme of the app when it is first opened,
default country code for phone login, length allowed for phone login,
fonts used in whole app.

## What’s Next?

After these basic configurations, continue with:

1. Integrating Firebase services
2. Customizing the app’s appearance
3. Setting up ads and in-app purchases
4. Thoroughly testing your app
5. Generating a release build

You’ll find detailed instructions for each step in the following sections of this documentation.
