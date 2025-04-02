---
sidebar_position: 7
---

# Cloud Firestore Integration

Elite Quiz uses Cloud Firestore to store user data and game progress. This page explains how to set up and configure Cloud Firestore for your application.

## Enabling Cloud Firestore

Follow these steps to add cloud firestore:

1. Go to your Firebase console and select your project
2. Click on "Firestore Database" in the left navigation menu
3. Click "Create database"

![Enable Firestore 1](../../static/img/web/addFirestore.jpg)

4. Choose "Start in production mode" or "Start in test mode" based on your needs

![Enable Firestore 2](../../static/img/web/addFirestore2.jpg)

5. Select a location for your database (choose the region closest to most of your users)
6. Click "Enable"

![Enable Firestore 3](../../static/img/web/addFirestore3.jpg)

## Security Rules

For production environments, you should set up proper security rules:

1. Go to the "Rules" tab in your Firestore Database dashboard
2. Update the security rules to secure your application

![Change Security Rules](../../static/img/web/addFirestore4.jpg)

Here's a basic example of security rules for Elite Quiz:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /quizzes/{quizId} {
      allow read: if request.auth != null;
    }
    match /leaderboards/{document=**} {
      allow read: if request.auth != null;
      allow write: if false;
    }
  }
}
```
