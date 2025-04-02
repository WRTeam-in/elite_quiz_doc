---
sidebar_position: 3
---

# Mobile App Errors

This page addresses common errors encountered in the Elite Quiz mobile application and provides solutions.

## Authentication Issues

### Unable to Login

**Symptoms:**

- Login process fails without error message
- "Authentication failed" error appears
- App freezes during login

**Solutions:**

1. Verify Firebase configuration in the admin panel
2. Check if the authentication method is enabled in Firebase
3. Clear app cache and data
4. Verify your Firebase project is properly set up for mobile authentication
5. Check the device's internet connection

### Social Login Failures

**Symptoms:**

- Google, Facebook, or other social login methods fail
- App crashes during social authentication
- Error messages from the social provider

**Solutions:**

1. Verify OAuth configuration for the specific provider
2. Check if the provider is properly enabled in Firebase
3. Verify SHA-1 and SHA-256 keys are correctly added to Firebase
4. Ensure the correct app ID and secret are configured

## API Connection Issues

### Cannot Connect to Server

**Symptoms:**

- Loading spinners that never resolve
- "Network error" or "Cannot connect to server" messages
- Quiz data doesn't load

**Solutions:**

1. Verify API URL in the app configuration
2. Check if the admin panel is online and accessible
3. Verify internet connectivity on the device
4. Check if your Firebase Realtime Database or Firestore is properly configured

### Data Not Loading

**Symptoms:**

- Empty categories, quizzes, or leaderboards
- "Failed to fetch" errors
- Partial data loading

**Solutions:**

1. Verify data exists in the admin panel
2. Clear app cache
3. Check if user has permissions to access the data
4. Verify Firestore/Realtime Database rules allow proper access

## UI and Rendering Issues

### Display Problems

**Symptoms:**

- Misaligned elements
- Overlapping text or components
- Images not rendering properly

**Solutions:**

1. Restart the app
2. Update to the latest version
3. Check if the device has adequate storage space
4. Verify the device meets minimum system requirements

### Performance Issues

**Symptoms:**

- App runs slowly
- Animations are choppy
- High battery consumption

**Solutions:**

1. Close background apps
2. Restart the device
3. Update to the latest app version
4. Check if the device meets recommended specifications

## Quiz Functionality Issues

### Timer Problems

**Symptoms:**

- Timer doesn't start or stops unexpectedly
- Timer counts down too quickly or slowly
- Timer resets unexpectedly

**Solutions:**

1. Check device date and time settings
2. Verify internet connectivity
3. Restart the quiz
4. Update to the latest app version

### Answers Not Registering

**Symptoms:**

- Tapping on answers doesn't register
- Correct answers marked as incorrect
- Score not updating properly

**Solutions:**

1. Check for screen protector or touch screen issues
2. Restart the quiz
3. Clear app cache
4. Update to the latest version

## In-App Purchase Issues

### Purchases Not Completing

**Symptoms:**

- Purchase process starts but never completes
- Payment is processed but items not received
- "Item unavailable" errors

**Solutions:**

1. Verify Google Play/App Store account is properly set up
2. Check internet connectivity
3. Verify the purchase item ID is correctly configured
4. Contact support with purchase receipt

### Restore Purchases Not Working

**Symptoms:**

- Previously purchased items not appearing
- "No purchases to restore" message

**Solutions:**

1. Verify you're logged in with the same account used for original purchases
2. Check if the purchase was made on a different platform
3. Contact support with purchase receipts
