---
sidebar_position: 1
---

# Admin Panel Errors

This page lists common errors encountered in the Admin Panel and their solutions.

## Login Issues

### Unable to Login to Admin Panel

**Symptoms:**

- Login page refreshes without any error message
- "Invalid credentials" despite using correct username and password

**Solutions:**

1. Clear browser cache and cookies
2. Check if caps lock is enabled
3. Reset password through the "Forgot Password" link
4. Verify database connection

### Session Expired Too Quickly

**Symptoms:**

- Frequent session timeouts
- Being logged out while actively using the admin panel

**Solutions:**

1. Check your server configuration for session timeout settings
2. Update the `session.lifetime` value in config files
3. Ensure your server's date and time are correctly set

## Database Connection Errors

### Database Connection Failed

**Symptoms:**

- Error messages mentioning "could not connect to database"
- Blank pages when trying to access certain sections

**Solutions:**

1. Verify database credentials in configuration files
2. Check if database server is running
3. Ensure your database user has appropriate permissions
4. Check for database server resource limitations

## Web Settings Issues

### Firebase Configuration Not Saving

**Symptoms:**

- Firebase settings don't save or appear to reset
- Authentication methods don't work despite being configured

**Solutions:**

1. Check for JavaScript errors in the browser console
2. Ensure you're saving the form after making changes
3. Verify the format of your Firebase configuration
4. Check file permissions for config storage directories

### API Not Working

**Symptoms:**

- Web app can't connect to admin panel API
- Error messages about API connection failure

**Solutions:**

1. Verify API URL configuration
2. Check CORS settings on your server
3. Ensure API routes are correctly defined
4. Verify SSL certificate if using HTTPS

## Content Management Problems

### Cannot Upload Images

**Symptoms:**

- Image upload fails or shows error
- Uploaded images don't appear in the media library

**Solutions:**

1. Check upload directory permissions
2. Verify maximum upload size settings
3. Ensure the image format is supported
4. Check disk space on your server

### Quiz Questions Not Appearing

**Symptoms:**

- Created questions don't show up in quizzes
- Questions appear in admin but not on the front-end

**Solutions:**

1. Check if the questions are marked as active
2. Verify category and language settings
3. Clear application cache
4. Check for any pending database migrations

## Server-related Issues

### 500 Internal Server Error

**Symptoms:**

- Page shows "500 Internal Server Error"
- Certain admin functions fail with server error

**Solutions:**

1. Check server error logs
2. Verify PHP version compatibility
3. Check for syntax errors in custom code
4. Increase memory limits if resource-related

### Slow Admin Panel

**Symptoms:**

- Pages take a long time to load
- Actions like saving take excessive time

**Solutions:**

1. Optimize database with proper indexes
2. Enable caching mechanisms
3. Check for resource-intensive queries
4. Upgrade server resources if necessary
