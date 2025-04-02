---
sidebar_position: 1
---

# Mobile App Overview

:::caution Note
The web-based payment gateway is currently unavailable for security reasons or due to the Google In-App purchase system. However, you can purchase coins directly from the app, and these purchases will also be reflected on the web platform.
:::

The Elite Quiz Mobile App is a powerful, feature-rich application that allows users to participate in quizzes, compete with friends, earn rewards, and learn new information in an engaging format.

## Key Features

- **Multiple Quiz Types**: Daily quizzes, contests, 1vs1 battles, group battles and more
- **Social Integration**: Connect with Firebase Authentication (Google, Facebook, Phone)
- **Real-time Battles**: Challenge friends or random opponents to quiz battles
- **In-App Purchases**: Virtual currency system for purchasing coins
- **Multi-language Support**: Easily translate the app to any language
- **Reward Systems**: Daily rewards, referral bonuses, and achievement badges
- **Ad Integration**: Support for Google AdMob, Unity Ads and Facebook Ads
- **Customizable UI**: Easily update colors, logos, and app appearance
- **Admin Panel Integration**: Connect to the backend admin panel
- **Force Update System**: Ensure users always have the latest version

## Getting Started

To set up and customize the Elite Quiz Mobile App, you'll need to:

1. Set up your Flutter development environment
2. Configure the project and run it
3. Change package name and app name as needed
4. Integrate Firebase services
5. Connect to your Admin Panel
6. Customize the appearance and features
7. Generate a release version for app stores

Detailed instructions for each of these steps are provided in the following sections of this documentation.

## App Architecture

The Elite Quiz Mobile App is built with Flutter, allowing for a single codebase that works on both iOS and Android platforms. The app uses Firebase for backend services, including:

- Authentication
- Cloud Firestore database
- Cloud Functions
- Firebase Storage
- Firebase Analytics
- Firebase Crashlytics

## App Screens

The Elite Quiz Mobile App includes the following main screens:

- **Splash Screen**: Initial loading screen with app branding
- **Onboarding**: Introduction screens for new users
- **Authentication**: Login and registration screens
- **Home**: Main navigation hub with featured quizzes and categories
- **Categories**: Browse quizzes by category
- **Quiz Details**: Information about a specific quiz
- **Quiz Play**: Interactive quiz gameplay screen
- **Results**: Quiz results and statistics
- **Leaderboard**: Rankings of players
- **Profile**: User profile with statistics and achievements
- **Settings**: App configuration options
- **Store**: In-app purchases for coins and premium features

## Connecting to Admin Panel

The mobile app connects to the same backend as the web version, managed through the Admin Panel. This ensures consistent data and user experiences across all platforms.
