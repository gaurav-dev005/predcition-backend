# Prediction Backend

This is a simple backend API built with **Node.js**, **Express**, and **MongoDB**.

It is used to store and update prediction data in a database.

---

## 🔹 What is this project?

This project provides a server that listens for API requests.  
It connects to a MongoDB database and can:

- Check server status
- Save or update prediction data

---

##  Project Files

The main files are:

index.js # Main file
db.js # Database connection and schemas
routes/ #route handlers for http endpoints
setup / #extracting geohashes for an area or district and store it in database
status.js # API endpoint for status
modelData.js # API endpoint for model data
middlewares/ # Any middleware functions
.env.example # Example of config file
package.json # Project info and dependencies




---

## How to Run

### 1. Install Node.js

You must have **Node.js** installed.

Then install dependencies:

```bash
npm install


2. Create a .env file

Copy .env.example and fill your MongoDB link:

cp .env.example .env


Then edit .env:

DB_CONNECTION_STRING=your_mongodb_connection_url_here


Replace the value with your MongoDB database URL.(Currently backend is hosted with developer's own database url)

3. Start the Server

To start the server:

npm run start 


This will start your API.

API Endpoints
Check server status
GET /api/v1/status/info?area=imphalwest

This returns simple live status info.


**License**

This project has no specific license file. Use it freely.

