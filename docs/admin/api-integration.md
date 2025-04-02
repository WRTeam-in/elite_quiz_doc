---
sidebar_position: 7
---

# API Integration

The Elite Quiz Admin Panel provides a comprehensive API that allows you to integrate the quiz functionality with other applications or develop custom interfaces. This guide explains how to use and configure the API.

## API Overview

The Elite Quiz API is a RESTful API that uses JSON for data exchange. It provides endpoints for all major functionality of the application, including:

- User management
- Quiz management
- Question management
- Results and statistics
- Authentication
- Settings

## API Configuration

### Enabling the API

1. Navigate to **Settings > API Settings**
2. Toggle **Enable API** to turn on API functionality
3. Configure general API settings:
   - Rate Limiting
   - Allowed Origins (CORS)
   - Response Format
4. Click **Save API Settings**

### API Keys

1. Navigate to **Settings > API Keys**
2. Click **Generate New API Key**
3. Fill in the key details:
   - Key Name
   - Permissions
   - Expiration (if applicable)
   - IP Restrictions (if applicable)
4. Click **Create Key**
5. Copy and securely store the generated API key

## Authentication

### Authentication Methods

The API supports the following authentication methods:

- **API Key Authentication**: Using the `X-API-Key` header
- **OAuth 2.0**: For more secure integrations
- **JWT (JSON Web Tokens)**: For stateless authentication

### API Key Authentication

Include your API key in the header of each request:

```
X-API-Key: your_api_key_here
```

### OAuth 2.0 Authentication

1. Navigate to **Settings > OAuth Settings**
2. Create an OAuth client
3. Use the standard OAuth 2.0 flow to obtain an access token
4. Include the token in your requests:

```
Authorization: Bearer your_access_token_here
```

## API Endpoints

### Base URL

All API endpoints start with your base URL:

```
https://your-domain.com/api/v1/
```

### Available Endpoints

#### User Endpoints

- `GET /users`: List all users
- `GET /users/{id}`: Get a specific user
- `POST /users`: Create a new user
- `PUT /users/{id}`: Update a user
- `DELETE /users/{id}`: Delete a user

#### Quiz Endpoints

- `GET /quizzes`: List all quizzes
- `GET /quizzes/{id}`: Get a specific quiz
- `POST /quizzes`: Create a new quiz
- `PUT /quizzes/{id}`: Update a quiz
- `DELETE /quizzes/{id}`: Delete a quiz

#### Question Endpoints

- `GET /quizzes/{quiz_id}/questions`: List questions for a quiz
- `GET /questions/{id}`: Get a specific question
- `POST /quizzes/{quiz_id}/questions`: Add a question to a quiz
- `PUT /questions/{id}`: Update a question
- `DELETE /questions/{id}`: Delete a question

#### Result Endpoints

- `GET /results`: Get quiz results
- `GET /results/user/{user_id}`: Get results for a specific user
- `GET /results/quiz/{quiz_id}`: Get results for a specific quiz
- `POST /results`: Submit a quiz result

## Request and Response Format

### Request Format

Requests should be made with the appropriate HTTP method and JSON data where applicable:

```json
{
  "name": "Sample Quiz",
  "description": "This is a sample quiz",
  "time_limit": 600,
  "pass_percentage": 70
}
```

### Response Format

Responses are returned in JSON format:

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "name": "Sample Quiz",
    "description": "This is a sample quiz",
    "time_limit": 600,
    "pass_percentage": 70,
    "created_at": "2023-04-02T09:00:00Z",
    "updated_at": "2023-04-02T09:00:00Z"
  }
}
```

## Error Handling

API errors are returned with appropriate HTTP status codes and a JSON response:

```json
{
  "status": "error",
  "code": "validation_error",
  "message": "The name field is required",
  "details": {
    "name": ["The name field is required"]
  }
}
```

## Rate Limiting

To ensure service stability, the API implements rate limiting:

1. Navigate to **Settings > API Settings > Rate Limiting**
2. Configure rate limits:
   - Requests per minute
   - Requests per hour
   - Requests per day
3. Configure different limits for different API keys if needed
4. Click **Save Rate Limit Settings**

## Webhooks

### Configuring Webhooks

Webhooks allow external applications to receive real-time updates:

1. Navigate to **Settings > Webhooks**
2. Click **Add Webhook**
3. Configure the webhook:
   - Webhook URL
   - Events to trigger the webhook
   - Secret token for verification
4. Click **Save Webhook**

### Webhook Events

Available webhook events include:

- `user.created`
- `user.updated`
- `quiz.created`
- `quiz.updated`
- `quiz.deleted`
- `result.submitted`

## API Documentation

### Accessing Interactive Documentation

1. Navigate to **API > Documentation**
2. The interactive documentation allows you to:
   - View all available endpoints
   - See request and response formats
   - Test API calls directly from the browser
   - Generate code samples in various programming languages

## API Logs

### Viewing API Activity

1. Navigate to **API > Logs**
2. View detailed logs of API usage:
   - Request timestamps
   - Endpoint accessed
   - Response status
   - IP address
   - API key used
3. Use filters to narrow down logs by date, endpoint, or status code

## Managing System Languages

The Elite Quiz admin panel provides a powerful multi-language system where you can manage system-wide translations.

![Manage System Languages](/img/panel/manage_system_languages.webp)

### Editing System Languages

You can edit each system language to provide accurate translations for all UI elements.

![Edit System Language](/img/panel/edit_system_language.webp)

These translations will be applied across the entire application, ensuring a consistent experience for users in their preferred language.
