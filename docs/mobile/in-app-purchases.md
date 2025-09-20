---
sidebar_position: 8
---

# Configure In-App Purchases

## Overview

Elite Quiz supports

- Purchasing virtual coins with real money through In-App Purchases (IAP)
- Plus a "Remove Ads" lifetime package with one-time payment.

:::warning Prerequisites
Before proceeding with this guide, please kindly read the [WRTeam Common IAP Documentation](https://wrteam-in.github.io/common_app_doc/GeneralSettings/iap) to understand:

- How to create In-App Purchases in **App Store** and **Play Console**
- Different types of IAP (consumable, non-consumable)
- IAP testing procedures and requirements
- Platform-specific guidelines and restrictions

This foundational knowledge is essential as we'll **_only_** focus on Elite Quiz-specific configuration here.
:::

:::note
Subscriptions are not currently supported.
:::

## Platform-Specific Configuration

Before creating IAP products, ensure you have completed these platform-specific configurations:

### Android Specific

#### Step 1: Add your Android package name in the Admin Panel

- Go to your `Admin Panel > Settings > In App Settings`
- Add your android app package name in

#### Step 2: Add your Firebase service account email to Google Play Console for purchase validation

#### Step 3: Enable "Google Play Android Developer API" in Google Play Console

### iOS Specific

#### Step 1: Create and add the shared secret from App Store Connect to your Admin Panel

## Implementation Workflow

### Step 1: Create IAP Products in Admin Panel

Configure your in-app purchase products in the Elite Quiz Admin Panel:

- Set up coin packages with appropriate quantities and pricing
- Configure the "Remove Ads" non-consumable product
- Define product IDs that will be used across all platforms
- Test the admin panel IAP configuration

### Step 2: Create Matching Products in App Stores

Create identical IAP products in both Google Play Console and Apple App Store Connect:

- **Product IDs must match exactly** between platforms and admin panel
- Use consistent naming, descriptions, and pricing
- Ensure proper product types (consumable for coins, non-consumable for remove ads)
- Configure appropriate price tiers for different markets

### Step 3: Testing and Validation

Deploy your app for testing and validate IAP functionality:

- **Android Testing**: Use closed/open/internal testing tracks on Google Play
- **iOS Testing**: Deploy to TestFlight for iOS testing
- **Test User Setup**: Configure license testing for Android and sandbox users for iOS
- **Purchase Flow Testing**: Verify complete purchase workflows work correctly

:::warning Testing Requirements
IAP testing requires your app to be published in testing tracks (Google Play) or TestFlight (iOS). Local development testing of purchases is not possible without proper app store distribution.
:::

---

## Important Notes

- **Product ID Consistency**: All product IDs must be identical across Admin Panel, Google Play, and App Store
- **Testing Timeline**: Allow extra time for app store review processes during testing phases
- **Purchase Validation**: Elite Quiz includes server-side purchase validation for security
- **Regional Pricing**: Consider local market pricing when setting IAP costs

:::tip Success Factors
Successful IAP implementation requires careful attention to product ID consistency, thorough testing across both platforms, and proper server-side validation. Take time to test thoroughly before production release.
:::
