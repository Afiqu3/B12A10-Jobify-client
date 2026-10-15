# 💼 Jobify

A full-stack job management platform where users can explore, post, update, and accept jobs — built with **React**, **Node.js**, **Express**, **MongoDB**, and **Firebase Authentication**.
This project demonstrates end-to-end CRUD operations, protected routes, and real-world integration of modern web technologies.

---

## 🚀 Live Project Links

| Service | Link |
|---------|------|
| **Client (Frontend)** | https://jobify-a10.netlify.app/ |
| **Server API (Backend)** | https://jobify-api-server.vercel.app |

> Frontend is deployed on Netlify, backend API is deployed on Vercel.

---

## 🧩 Features

### 🔐 Authentication
- User login and registration using **Firebase Authentication**
- Supports **Google Sign-In**
- Displays logged-in user’s **photo and name**
- Protected routes for sensitive pages (`/addJob`, `/myAddedJobs`, `/myAcceptedJobs`)
- Users stay logged in even after refreshing the page

### 💼 Job Management
- **Add a Job:** Authenticated users can post jobs with details like title, category, summary, salary, and vacancy.
- **View All Jobs:** Browse all posted jobs in a grid layout.
- **Job Details:** View complete job info with option to accept the job.
- **Update/Delete:** Job owners can edit or delete their own jobs.
- **Accept Jobs:** Users can accept others’ jobs (not their own) — accepted jobs appear in “My Accepted Jobs”.

### 🎨 UI & UX
- Fully responsive across **mobile, tablet, and desktop**
- **Dark/Light theme toggle**
- Elegant **animated banner** and dynamic sections using **Motion**
- Interactive **Top Categories**, **About Platform**, and **FAQ** sections
- **Custom 404 page** for invalid routes
- **Toast notifications** for all success/error actions (no `alert()` used)
- **Loading spinners** during data fetch operations

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | React, React Router, Tailwind CSS, DaisyUI |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | Firebase Authentication |
| **HTTP Client** | Axios |
| **UI Enhancements** | Motion, React Icons, React Spinners |
| **Notifications** | React Toastify, SweetAlert2 |
| **Date Handling** | date-fns, date-fns-tz |
| **Typing Effect** | react-simple-typewriter |

---

## 📦 Dependencies Used

### Main Dependencies (`dependencies`)

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.1.1 | Core UI library |
| `react-dom` | ^19.1.1 | React DOM rendering |
| `react-router` | ^7.9.5 | Client-side routing, protected routes |
| `firebase` | ^12.5.0 | Authentication (Email/Password + Google Sign-In) |
| `axios` | ^1.13.2 | HTTP client for communicating with Express/MongoDB API |
| `tailwindcss` | ^4.1.17 | Utility-first CSS framework |
| `@tailwindcss/vite` | ^4.1.17 | Tailwind CSS Vite plugin |
| `motion` | ^12.23.24 | Animations and page transitions (Framer Motion successor) |
| `react-icons` | ^5.5.0 | Icon library |
| `react-toastify` | ^11.0.5 | Toast notifications |
| `sweetalert2` | ^11.26.3 | Confirmation / alert modals (e.g. delete confirm) |
| `react-spinners` | ^0.17.0 | Loading spinners |
| `react-simple-typewriter` | ^5.0.1 | Typing effect in banner/hero |
| `date-fns` | ^4.1.0 | Date formatting and sorting |
| `date-fns-tz` | ^3.2.0 | Timezone-aware date handling |

### Dev Dependencies (`devDependencies`)

| Package | Version | Purpose |
|---------|---------|---------|
| `vite` | ^7.1.7 | Build tool / dev server |
| `@vitejs/plugin-react` | ^5.0.4 | React plugin for Vite |
| `daisyui` | ^5.4.7 | Tailwind CSS component library |
| `eslint` | ^9.36.0 | Linting |
| `@eslint/js` | ^9.36.0 | ESLint base config |
| `eslint-plugin-react-hooks` | ^5.2.0 | React Hooks lint rules |
| `eslint-plugin-react-refresh` | ^0.4.22 | Vite React refresh lint rules |
| `@types/react` / `@types/react-dom` | ^19.x | TypeScript type definitions |
| `globals` | ^16.4.0 | Global variables for ESLint |

> See `package.json` for exact version ranges. Install with `npm install`.

---

## 🧠 Core Functionalities

### 1. **Home Page**
- Animated banner with CTA buttons
- Latest 6 jobs fetched dynamically from MongoDB
- Static sections: Top Categories, About Platform, FAQ, How It Works

### 2. **All Jobs**
- Grid layout of all jobs
- Sorting by posted date/time
- View Details button for each job

### 3. **Add Job**
- Form for posting new jobs (private route)
- Auto-filled “Posted By”, “User Email”, and “Posted Date”
- Shows toast notification on successful submission

### 4. **My Added Jobs**
- Lists jobs created by the logged-in user
- Update and Delete options available
- Instant UI update after deletion

### 5. **Update Job**
- Pre-filled editable form
- Confirmation toast upon update success

### 6. **My Accepted Jobs**
- Shows jobs accepted by the logged-in user
- Each card includes ✅ (Done) and ❌ (Cancel) buttons
- Instant UI and database update

---

## 💻 How to Run the Project Locally

### Prerequisites

- **Node.js** v20 or higher (`node -v` to check)
- **npm** v10+ (comes with Node.js)
- **Git**
- A **Firebase project** with Email/Password and Google providers enabled
- Backend API running — either use the live API `https://jobify-api-server.vercel.app` (default in `src/hooks/useAxios.jsx` / `useAxiosSecure.jsx`) or run the Express/MongoDB server locally

### 1. Clone the repository

```bash
git clone <your-client-repo-url>
cd Jobify-client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root (same level as `package.json`):

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> Get these values from Firebase Console → Project Settings → General → Your apps → SDK setup and configuration.
> `src/firebase/firebase.init.js` reads exactly these `VITE_` variables.

### 4. (Optional) Point to a local backend

By default the app uses:

```js
baseURL: 'https://jobify-api-server.vercel.app'
```

in `src/hooks/useAxios.jsx` and `src/hooks/useAxiosSecure.jsx`. To use a local server, change the `baseURL` to e.g. `http://localhost:5000`.

### 5. Run the development server

```bash
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

### 6. Other useful scripts

```bash
npm run build   # build for production -> outputs to dist/
npm run preview # preview the production build locally
npm run lint    # run ESLint
```

### Project structure

```
Jobify-client/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexts/      # Auth + Theme providers
│   ├── firebase/      # firebase.init.js
│   ├── hooks/         # useAxios, useAxiosSecure
│   ├── layouts/
│   ├── pages/
│   ├── routes/        # React Router routes, private routes
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── .env               # you create this (gitignored)
```

---

## 🔑 Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_FIREBASE_API_KEY` | Yes | Firebase Web API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Yes | Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Yes | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Yes | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Yes | Firebase sender ID |
| `VITE_FIREBASE_APP_ID` | Yes | Firebase app ID |

---

## 🚀 Deployment

- Frontend live on Netlify: https://jobify-a10.netlify.app/
- Backend live on Vercel: https://jobify-api-server.vercel.app
- Production build command: `npm run build` (output directory: `dist/`)
