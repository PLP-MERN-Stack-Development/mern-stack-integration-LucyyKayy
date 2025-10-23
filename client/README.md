# Busy Busy Tours - Travel Blog

## Project Overview
Busy Busy Tours is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) travel blog application.  
It allows users to view, create, update, and delete travel posts. Categories are supported to organize posts.  
The front-end is built with React and Tailwind CSS for a spacious, bold, and responsive UI.

---

## Setup Instructions

### Prerequisites
- Node.js v18+  
- MongoDB installed and running  

### Server Setup
```bash
cd server
npm install
cp .env.example .env
npm run dev

cd client
npm install
npm run dev

API Documentation
Posts

GET /api/posts - Get all posts

GET /api/posts/:id - Get a single post by ID

POST /api/posts - Create a new post

PUT /api/posts/:id - Update a post by ID

DELETE /api/posts/:id - Delete a post by ID

Categories

GET /api/categories - Get all categories

POST /api/categories - Create a new category