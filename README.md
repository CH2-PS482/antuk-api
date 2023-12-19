# **Antuk API**

Antuk (Anti-Ngantuk) aims to create an efficient system to prevent drowsiness while driving or operating machinery. This API provides functionalities for user registration, login, profile management, and history tracking. With features tailored to monitor and alert users during extended periods of activity, this API prioritizes safety and aims to reduce accidents caused by drowsiness or fatigue.

- **URL**: https://antuk-api-6zs7zupnrq-et.a.run.app/
- **Backup URL**: https://antuk-api-6zs7zupnrq-et.a.run.app/

## **Table of Contents**

- [Tech Stack](https://github.com/aqmarinas/antuk?tab=readme-ov-file#tech-stack)
- [Installation](https://github.com/aqmarinas/antuk?tab=readme-ov-file#installation)
- [Start the Server](https://github.com/aqmarinas/antuk?tab=readme-ov-file#start-the-server)
- [API Endpoints](https://github.com/aqmarinas/antuk?tab=readme-ov-file#api-endpoints)
- [Testing](https://github.com/aqmarinas/antuk?tab=readme-ov-file#testing)

## Tech Stack

**Runtime environment:** Node.js

**Library**

- **bcrypt**: used for password hashing.
- **body-parser**: for handle URL-encoded data.
- **dotenv**: loads environment variables from a `.env` file into `process.env`
- **express**: create API.
- **joi**: used for input validation.
- **jsonwebtoken**: used to generate and verify JSON Web Tokens (JWTs) in authentication workflows.
- **mysql2**: interact with MySQL databases.
- **uid**: used to generate unique identifiers.
- **nodemon**: monitors changes in the Node.js and automatically restart the server when files are modified.

**Database:** MySQL

**Others:**

- **Postman**: used for testing the APIs

## Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/aqmarinas/antuk.git
```

2. Change the directory.

```bash
cd antuk
```

3. Install required libraries

```bash
npm install LIBRARY-NAME
```

3. Create database.

4. Import `antuk.sql  `

5. Setting up `.env.example` file.

```bash
PORT=

DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=

SECRETKEY=
```

> [!WARNING]
> Don't forget to rename `.env.example` file to `.env`

## Start the Server

Execute this script in the terminal:

```bash
npm run start
```

If you are using nodemon, use this script:

```bash
npm run start-dev
```

## API Endpoints

### **Server**

- Method: **ALL**
- Path: `{url}/`
- Description: used for check server status and connectivity.

### **Auth**

**1. Register User**

- Method: `POST`
- Path: `{url}/auth/register`
- Description: used to register a new user account.
- Request Body:

```bash
{
    "fullName": "Arina Menangis",
    "phoneNumber": "081234567890",
    "password": "hapihapihapi",
    "confirmPassword": "hapihapihapi"
}
```

- Response Body: `201 Created`

```bash
{
    "message": "Register success",
    "data": {
        "idUser": "161da26f",
        "fullName": "Arina Menangis",
        "phoneNumber": "081234567890"
    }
}
```

**2. Log In**

- Method: `POST`
- Path: `{url}/auth/login`
- Description: used to log into the application.
- Request Body:

```bash
  {
  "phoneNumber": "081234567890",
  "password": "hapihapihapi"
  }
```

- Response Body: `200 OK`

```bash
{
    "message": "Log in success",
    "data": {
        "idUser": "161da26f",
        "phoneNumber": "081234567890",
        "fullName": "Arina Menangis",
        "token": "[TOKEN]"
    }
}
```

> [!NOTE]
> Copy the token and paste it into authorization

### **Profile**

**1. Get Profile**

- Method: `GET`
- Path: `{url}/profile`
- Authorization: Bearer Token
- Description: used to view the profile.
- Response Body: `200 OK`

```bash
{
    "message": "Get user success",
    "data": {
        "idUser": "161da26f",
        "phoneNumber": "081234567890",
        "fullName": "Arina Menangis"
    }
}
```

**2. Edit Profile**

- Method: `PATCH`
- Path: `{url}/profile/edit`
- Authorization: Bearer Token
- Description: used to change the profile.
- Request Body:

```bash
  {
  "phoneNumber": "0000000000",
  "fullName": "Arina Menangis"
  }
```

- Response Body: `201 Created`

```bash
{
    "message": "Update user success",
    "data": {
        "idUser": "161da26f",
        "phoneNumber": "0000000000",
        "fullName": "Arina Menangis"
    }
}
```

**3. Reset Password**

- Method: `PUT`
- Path: `{url}/profile/reset-password`
- Authorization: Bearer Token
- Description: used to create a new password.
- Request Body:

```bash
  {
  "password": "hapihapihapi",
  "confirmPassword": "hapihapihapi"
  }
```

- Response Body: `201 Created`

```bash
{
    "message": "Reset password success"
}
```

### **History**

**1. Add History**

- Method: `POST`
- Path: `{url}/history`
- Authorization: Bearer Token
- Description: used to send the history after finishing driving.
- Response Body: `201 Created`

No need to add a request body. This request are generated automaticly.

```bash
{
    "message": "Add history success"
}
```

**2. Get All History**

- Method: `GET`
- Path: `{url}/history`
- Authorization: Bearer Token
- Description: used to view all history.
- Response Body: `200 OK`

```bash
{
    "message": "Get all history success",
    "data": [
        {
            "idUser": "161da26f",
            "idHistory": "0f3df87693",
            "date": "18 Desember 2023",
            "duration": "00:00:00",
            "totalWarnings": 0
        },
        {
            "idUser": "161da26f",
            "idHistory": "185714018d",
            "date": "17 Desember 2023",
            "duration": "00:00:00",
            "totalWarnings": 0
        }
    ]
}
```

## Testing

1. Open Postman.
2. Click `Import` and select `antuk-collection.json` and `antuk-environment.json`

   ![import](https://github.com/aqmarinas/dump/blob/main/antuk/import.PNG?raw=true)

3. Import both.
4. Go to `Environment` and adjust the URL. Make sure `url` variable is checked.

   ![check](https://github.com/aqmarinas/dump/blob/main/antuk/variable.PNG?raw=true)

5. On the right top, change environment to `Antuk`

   ![environment](https://github.com/aqmarinas/dump/blob/main/antuk/select-environment.PNG?raw=true)

6. Go to `Collection`, select a request, and click `Send` to test the APIs.
   ![testing](https://github.com/aqmarinas/dump/blob/main/antuk/testing.PNG?raw=true)
