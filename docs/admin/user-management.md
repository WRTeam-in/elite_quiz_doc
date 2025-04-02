---
sidebar_position: 4
---

# User Management

The User Management section in Elite Quiz Admin Panel allows you to create, edit, and manage all user accounts for your application.

## User Overview

### Accessing User Management

1. Log in to your Admin Panel
2. Navigate to **Users > All Users**
3. Here you can see a list of all registered users with the following information:
   - User ID
   - Name
   - Email
   - Registration Date
   - Status
   - Actions

## User Operations

### Adding a New User

1. Navigate to **Users > Add User**
2. Fill in the user details:
   - Full Name
   - Email Address
   - Password
   - Confirm Password
   - Phone Number (optional)
   - Profile Image (optional)
   - User Role
   - Status (Active/Inactive)
3. Click **Create User** to add the user

### Editing User Information

1. From the user list, click the **Edit** icon next to the user
2. Update the user information as needed
3. Click **Save Changes** to update the user data

### Deactivating/Reactivating Users

1. To deactivate a user, click the **Status** toggle to set it to inactive
2. To reactivate, simply toggle the status back to active
3. Deactivated users will not be able to log in to the application

### Deleting Users

1. From the user list, click the **Delete** icon next to the user
2. Confirm the deletion in the popup dialog
3. The user will be permanently removed from the system

:::caution
Deleting a user is permanent and will remove all their data, including quiz history and scores. Consider deactivating users instead of deleting them.
:::

## User Roles and Permissions

### Managing User Roles

1. Navigate to **Users > Roles**
2. Here you can:
   - View existing roles
   - Create new roles
   - Edit role permissions
   - Delete roles

### Creating a New Role

1. Navigate to **Users > Roles > Add Role**
2. Enter the role name
3. Set permissions for the role:
   - Quiz Management
   - User Management
   - Report Access
   - Settings Access
   - And other available permissions
4. Click **Create Role**

### Assigning Roles to Users

1. Edit a user
2. Select the appropriate role from the dropdown
3. Save the changes

## User Statistics

### Viewing User Activity

1. Navigate to **Users > User Activity**
2. View detailed statistics about user engagement:
   - Login History
   - Quiz Participation
   - Score History
   - Reward Points

### User Performance Reports

1. Navigate to **Reports > User Performance**
2. Generate reports based on:
   - Quiz completion rates
   - Average scores
   - Time spent on quizzes
   - Category preferences

## Bulk User Operations

### Importing Users

1. Navigate to **Users > Import Users**
2. Download the CSV template
3. Fill in user details in the template
4. Upload the completed CSV file
5. Map the columns if needed
6. Click **Import** to add all users at once

### Exporting User Data

1. Navigate to **Users > All Users**
2. Use the filters to select the users you want to export
3. Click **Export** and select your preferred format (CSV/Excel)
4. The file will be downloaded to your computer

## User Verification

### Email Verification

1. Navigate to **Settings > User Settings**
2. Enable or disable email verification
3. Customize the verification email template
4. Set verification expiration time

### Managing Pending Verifications

1. Navigate to **Users > Pending Verifications**
2. View users who have not completed verification
3. Manually verify users if needed
4. Resend verification emails
