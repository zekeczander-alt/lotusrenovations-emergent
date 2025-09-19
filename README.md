# Lotus Renovations Project Documentation

## Overview

This project is a fullstack web application for Lotus Renovations, a home renovation company. It consists of:

- **Frontend**: A modern React application (bootstrapped with Create React App, using CRACO for configuration overrides, Tailwind CSS for styling, and Radix UI for components).
- **Backend**: A FastAPI server with MongoDB for data storage, providing RESTful APIs.

---

## Project Structure

```
lotusrenovations-emergent/
│
├── backend/
│   ├── requirements.txt
│   └── server.py
│
├── frontend/
│   ├── package.json
│   ├── craco.config.js
│   ├── tailwind.config.js
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── components/
│       ├── pages/
│       ├── data/
│       └── ...
│
├── README.md
└── ...
```

---

## Frontend

- **Framework**: React (with Create React App)
- **Styling**: Tailwind CSS, custom themes, and Radix UI components
- **Routing**: React Router
- **State Management**: React hooks
- **Build Tool**: CRACO (for custom Webpack config)
- **Features**:
  - Home, About, Services, Portfolio, Process, Testimonials, and Estimate pages
  - Modern, responsive UI
  - Estimate form with validation
  - FAQ, testimonials, and service listings

### Local Development

1. **Install dependencies**:
	```bash
	cd frontend
	yarn install
	# or
	npm install
	```

2. **Start the development server**:
	```bash
	yarn start
	# or
	npm start
	```

	The app will be available at [http://localhost:3000](http://localhost:3000).

3. **Build for production**:
	```bash
	yarn build
	# or
	npm run build
	```

	The production build will be in the `build/` directory.

---

## Backend

- **Framework**: FastAPI
- **Database**: MongoDB (via Motor async driver)
- **Features**:
  - REST API endpoints under `/api`
  - Example endpoints: `/api/status` (GET/POST)
  - CORS enabled for frontend integration

### Local Development

1. **Install dependencies**:
	```bash
	cd backend
	pip install -r requirements.txt
	```

2. **Set up environment variables**:
	- Create a `.env` file in `backend/` with:
	  ```
	  MONGO_URL=mongodb+srv://<user>:<password>@<cluster>/<dbname>?retryWrites=true&w=majority
	  DB_NAME=<dbname>
	  CORS_ORIGINS=http://localhost:3000
	  ```

3. **Run the server**:
	```bash
	uvicorn server:app --reload
	```

	The API will be available at [http://localhost:8000/api](http://localhost:8000/api).

---

## Deployment on Vercel

### Frontend (React)

1. **Push your code to a GitHub repository.**
2. **Go to [Vercel](https://vercel.com/) and import your repository.**
3. **Configure the project:**
	- **Framework Preset**: `Create React App`
	- **Build Command**: `yarn build` or `npm run build`
	- **Output Directory**: `frontend/build`
	- **Root Directory**: `frontend`
4. **Set environment variables if needed (e.g., for API URLs).**
5. **Deploy.**

Vercel will automatically build and deploy your frontend. The site will be available at your Vercel-provided URL.

### Backend (FastAPI)

Vercel is not designed for persistent Python backend servers. For production, deploy the FastAPI backend to a service like:

- **Render** (https://render.com/)
- **Railway** (https://railway.app/)
- **Fly.io** (https://fly.io/)
- **Heroku** (https://heroku.com/)

**Typical steps:**
1. Push your backend code to a separate repository (or subdirectory).
2. Create a new service on your chosen platform.
3. Set environment variables (`MONGO_URL`, `DB_NAME`, etc.).
4. Deploy.

**Note:** If you need a serverless API on Vercel, you can refactor your FastAPI endpoints into Vercel Python Serverless Functions, but this is not recommended for full FastAPI apps.

---

## Connecting Frontend and Backend

- Update API URLs in the frontend to point to your deployed backend (e.g., via environment variables or config).
- Ensure CORS settings on the backend allow requests from your Vercel frontend domain.

---

## Summary

- **Frontend**: Deploy to Vercel (`frontend/` as root, build output in `build/`)
- **Backend**: Deploy to a Python-friendly host (Render, Railway, etc.)
- **Environment**: Set all necessary environment variables for both frontend and backend
- **Connect**: Update frontend API URLs and backend CORS as needed

---

Let me know if you want this documentation saved to your main `README.md` or need further customization!
