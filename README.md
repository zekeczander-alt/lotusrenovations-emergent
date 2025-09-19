### Deploying the Frontend to Vercel

Vercel is a popular platform for hosting React applications. To deploy your frontend to Vercel:

1. **Push your code to a GitHub repository.**
2. **Go to [Vercel](https://vercel.com/) and import your repository.**
3. **Configure the project:**
	- **Framework Preset**: `Create React App`
	- **Build Command**: `npm run build` (or `yarn build`)
	- **Output Directory**: `build`
	- **Root Directory**: `frontend`
4. **Set environment variables if needed (e.g., for API URLs).**
5. **Deploy.**

Vercel will automatically build and deploy your frontend. The site will be available at your Vercel-provided URL.

**Note:**
- If your frontend makes API calls, update the API URLs to point to your deployed backend.
- The backend (FastAPI) cannot be hosted on Vercel. Use a Python-friendly host as described below.
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


### Local Development & Codespaces Usage

To run this project locally or in GitLab Codespaces:

#### 1. Start the Backend

```bash
cd backend
pip install -r requirements.txt
python server.py
```

The backend will start (by default, check your `server.py` for the port, usually `http://localhost:8000` or `http://localhost:5000`).

#### 2. Start the Frontend

Open a new terminal and run:

```bash
cd frontend
npm install
npm start
```

The frontend will be available at [http://localhost:3000](http://localhost:3000).

#### 3. Access the App

- Open your browser to [http://localhost:3000](http://localhost:3000) for the frontend.
- The frontend will communicate with the backend (ensure CORS is configured if running separately).

#### 4. Running in GitLab Codespaces

These same steps apply in GitLab Codespaces. Use the built-in terminal to run the backend and frontend as described above. You may need to use the Codespaces port forwarding feature to access the running services in your browser.

#### 5. Build for Production

```bash
cd frontend
npm run build
```

The production build will be in the `frontend/build/` directory.

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


## Deployment

### Deploying the Frontend to GitHub Pages

You can publish the React frontend to GitHub Pages using the `gh-pages` package. Here’s the complete process, including troubleshooting and how to access your deployed site:

1. **Install gh-pages as a dev dependency:**

		```bash
		cd frontend
		npm install --save-dev gh-pages
		```

2. **Set the homepage field in `frontend/package.json`:**

		```json
		"homepage": "https://<your-github-username>.github.io/<your-repo-name>"
		```
		Replace `<your-github-username>` and `<your-repo-name>` with your actual GitHub username and repository name. For this project, it should be:
		```json
		"homepage": "https://zekeczander-alt.github.io/lotusrenovations-emergent"
		```

3. **Add deploy scripts to `frontend/package.json`:**

		```json
		"scripts": {
			...existing scripts...
			"predeploy": "npm run build",
			"deploy": "gh-pages -d build"
		}
		```

4. **Build and deploy:**

		```bash
		npm run deploy
		```

		- This will build the app and push the contents of the `build/` directory to the `gh-pages` branch of your repository.
		- If you see an error like `gh-pages: not found`, make sure you have installed `gh-pages` as shown in step 1.
		- If you see a JSON parse error, check your `package.json` for trailing commas or syntax issues.

5. **Access your deployed site:**

		- Open your browser and go to the URL you set in the `homepage` field, e.g.:
			```
			https://zekeczander-alt.github.io/lotusrenovations-emergent
			```
		- If you don’t see the latest changes right away, wait a few minutes or refresh the page, as GitHub Pages may take a short time to update.

**Notes:**
- GitHub Pages only serves static files. Your backend (FastAPI) cannot be hosted on GitHub Pages. You will need to deploy it separately (see below).
- If your frontend makes API calls, update the API URLs to point to your deployed backend.

---

### Backend (FastAPI)

GitHub Pages cannot host Python backends. For production, deploy the FastAPI backend to a service like:

- **Render** (https://render.com/)
- **Railway** (https://railway.app/)
- **Fly.io** (https://fly.io/)
- **Heroku** (https://heroku.com/)

**Typical steps:**
1. Push your backend code to a separate repository (or subdirectory).
2. Create a new service on your chosen platform.
3. Set environment variables (`MONGO_URL`, `DB_NAME`, etc.).
4. Deploy.

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
