# Fullstack Auth App

A fullstack authentication app built with React, Vite, Tailwind CSS, Express, and PostgreSQL.

## Prerequisites

- Node.js
- PostgreSQL

## Setup

### 1. Clone the repo and install frontend dependencies

```bash
npm install
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Create the environment file

Create a `.env` file in the project root:

```
PORT=5000
CLIENT_URL=http://localhost:5173
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=auth_app
JWT_SECRET=changethis
```

### 4. Set up the database

Open SQL Shell (psql) and run:

```sql
CREATE DATABASE auth_app;
\c auth_app
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

### 5. Run the app

In one terminal, start the backend:

```bash
node server/index.js
```

In another terminal, start the frontend:

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

## TODO

- [ ] **Secure token storage** — move JWT from `localStorage` to `httpOnly` cookies so JavaScript can't access the token (more secure against XSS attacks)
- [ ] **Protected routes** — check for token on the `/home` route and redirect to `/` if missing, so unauthenticated users can't access it directly
- [ ] **Frontend error handling** — display error messages from the backend (e.g. "User already exists", "Invalid credentials") in the UI instead of silently failing
- [ ] **Deployment** — host the database (Supabase/Neon/Railway), backend (Render/Railway/Fly.io), and frontend (Vercel/Netlify), and update environment variables accordingly
