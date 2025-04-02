---
sidebar_position: 3
---

# Admin Panel Configuration

After installing the Elite Quiz Admin Panel, you'll need to configure it to match your requirements. This guide covers the essential configuration steps.

## Basic Configuration

### General Settings

1. Log in to your Admin Panel
2. Navigate to **Settings > General Settings**
3. Configure the following settings:
   - Application Name
   - Admin Email
   - Default Language
   - Time Zone
   - Date Format
   - Currency Settings
4. Click **Save Changes** to apply your settings

## Firebase Configuration

### Setting Up Firebase Integration

1. **Create Firebase Database**:

   ![Create Firebase Database](/img/panel/firebase_create_database.webp)

2. **Select Database Location**:

   ![Select Database Location](/img/panel/firebase_select_database_location.webp)

3. **Set Up Battle Rules**:

   ![Battle Rules](/img/panel/firebase_battle_rules.webp)

4. **Configure Battle Index**:

   ![Battle Index](/img/panel/firebase_battle_index.webp)

5. **Download Services JSON**:

   ![Download Services JSON](/img/panel/download_services_json.webp)

6. **Upload Services JSON**:

   ![Upload Services JSON](/img/panel/upload_services_json.webp)

7. **Verify Google Play Android Developer API is Enabled**:

   ![Google Console Verify](/img/panel/google_console_verify_play_android_developer_api_is_enabled.webp)

## Authentication Settings

Configure authentication methods for your application:

![Authentication Settings](/img/panel/authentication_settings.webp)

## Email Configuration

### Setting Up Email Services

1. Navigate to **Settings > Email Settings**
2. Configure your SMTP settings:
   - SMTP Host
   - SMTP Port
   - SMTP Username
   - SMTP Password
   - Encryption Type (TLS/SSL)
   - From Email Address
   - From Name
3. Test your email configuration by clicking **Send Test Email**
4. Click **Save Email Settings**

## Payment Gateway Configuration

### Setting Up Payment Methods

1. Navigate to **Settings > Payment Settings**
2. Enable or disable payment gateways:
   - In-App Purchases (Google/Apple)
   - PayPal
   - Stripe
   - Razorpay
   - Other supported methods
3. For each enabled gateway, provide the required API credentials
4. Configure pricing options and subscription plans
5. Click **Save Payment Settings**

## Coin Settings

### Configuring Virtual Currency

1. Navigate to **Settings > Coin Settings**
2. Configure the following options:
   - Enable/Disable Coin System
   - Coin Packages and Pricing
   - Coin Rewards for Activities
   - Coin Usage Options
3. Click **Save Coin Settings**

## API Configuration

### Setting Up API Access

1. Navigate to **Settings > API Settings**
2. Configure API settings:
   - Enable/Disable API Access
   - Generate API Keys
   - Set API Rate Limits
   - Configure API Permissions
3. Click **Save API Settings**

## Social Media Integration

### Configuring Social Media Links

1. Navigate to **Settings > Social Media Settings**
2. Add your social media links:
   - Facebook
   - Twitter
   - Instagram
   - YouTube
   - Other platforms
3. Configure social sharing options
4. Click **Save Social Media Settings**

## Notification Settings

### Setting Up User Notifications

1. Navigate to **Settings > Notification Settings**
2. Configure the following options:
   - Push Notification Settings
   - Email Notification Templates
   - In-App Notification Settings
   - Notification Frequency
3. Click **Save Notification Settings**

## Advanced Configuration

### Custom CSS and JavaScript

1. Navigate to **Settings > Advanced Settings**
2. Add custom CSS and JavaScript code to customize your application's appearance and behavior
3. Configure caching and performance settings
4. Set security options and access restrictions
5. Click **Save Advanced Settings**

## Configuration Files

For advanced users, you can directly edit configuration files in the server:

1. Main configuration file: `config/app.php`
2. Environment settings: `.env` file
3. Database configuration: `config/database.php`

:::caution
Direct editing of configuration files should only be done by experienced developers. Always back up your files before making changes.
:::

# System Configurations

This section explains how to configure the Elite Quiz system settings for optimal performance.

## Profile Settings

Change the Quiz name and logo in the Profile menu:

![Profile Settings](/img/panel/profile.webp)

## System Settings

From the System Configurations screen, you can set:

- System & App Timezone
- App Play store or market place Links
- Enable/Disable Answer Display
- Language Mode
- Option E Mode
- Force Update App
- Daily Quiz Mode
- Contest Mode
- Battle Random Category Mode
- Battle Group Category Mode
- In App Purchase
- App Version
- Shareapp Text
- Fix Question in level

![System Configurations](/img/panel/system-configurations.webp)

### Configuration Settings Explained

- **System Timezone:** This option sets the time zone of the admin panel.

- **App Links:** You can set your apps play store/app store links in here, when user refers the app these links will be used.

- **Refer Coins:** Amount of coins your referral gets for using your referral code.

- **Earn Coins:** Amount of coins user gets for referring.

- **Force Update:** If you want to require users to update the app to latest version. you can enable force update and add the **Android/IOS App Version** if app has given version it will show force update dialog to those users.

- **True/False Values:** When Creating True False Question these values will be added as default values, then you can also edit them.

- **Share App Text:** sharing the app will share this text.

- **App Maintenance:** When you are working on the admin panel or apps Maintenance, you can enable this option so it will show users that app is in Maintenance Mode.

- **Language Mode:** If you want to only use one language in the app you can disable this option. if you want to add multiple languages enable this feature.

- **Option E:** If you want 5 options for the answer you can enable this option. otherwise there will be 4 options to select from for answer.

- **Daily Quiz/Contest Mode:** Toggle Daily Quiz/Contest feature functionality

- **In App Purchase:** This option controls 'Coin Store' functionality in the app. if you disable this feature user won't be able to purchase coins.

## Quiz-Specific Settings

Additionally, you can change quiz specific settings from System Utilities:

![System Utilities 1](/img/panel/system_utilities.webp)

- **Visible Mode:** Controls visibility of the feature. if you want to disable any particular quiz you can disable this option for that quiz.

- **Fix Questions:** if disabled all the questions of category/subcategory or level will be fetched for user to play. otherwise you can limit the no of question randomly fetched from many.

- **Duration:** Adjust Quiz Duration for quiz

- **Correct Answer Credit Score:** For each correct answer this amount of score is given

- **Wrong Answer Deduct Score:** for each wrong answer this amount of score is deducted.

![System Utilities 2](/img/panel/system_utilities.webp)

- **Extra Scores:** given in battles, when user answers correctly and quickly, if user correctly answers in 2 seconds they get extra score from quickest answer score, and if they answer in 4 seconds they get extra score from second quickest answer score.

- **Opponent Search Duration:** For Random Battle, it will search for opponent for this duration.
