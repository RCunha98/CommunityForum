# CommunityForum#
---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints (To be expanded)](#api-endpoints-to-be-expanded)
- [Real-time Features (To be expanded)](#real-time-features-to-be-expanded)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Project Overview

This is a full-stack web application designed to be a modern community forum or social feed platform. Users can register, log in, create and interact with posts, comment on discussions, and engage with other users in a real-time environment.

This project was specifically undertaken as a **training and learning exercise** to deepen my understanding of full-stack application development and overcome common architectural challenges. Key objectives included:
-   **Designing a scalable monorepo architecture** for cohesive frontend and backend development.
-   **Implementing robust authentication and authorization flows** with JWTs and secure password handling.
-   **Integrating real-time features** using Socket.IO for dynamic user experiences.
-   **Gaining hands-on experience** with a modern Vue.js meta-framework (Nuxt.js) for enhanced performance and SEO capabilities.
-   **Mastering the integration** between a Node.js/Express backend, MongoDB, and a complex Vue.js/Nuxt.js frontend.

The project serves as a practical demonstration of my ability to design, develop, and integrate complex web systems from end to end.

**When working show a demo here!!!!!!!**

---

## Features

*(Be specific and use checkboxes to show what's implemented and what's planned)*

**User Management & Authentication:**
- [ ] User Registration (Sign Up)
- [ ] User Login (Authentication with JWT)
- [ ] User Profile Management (e.g., update username, email, password)
- [ ] Following/Unfollowing other users

**Post Management:**
- [ ] Create, Read, Update, Delete (CRUD) posts
- [ ] Display posts in a feed (e.g., chronological, by popularity)
- [ ] Image/Media uploads for posts (stretch goal)
- [ ] Liking/unliking posts

**Comments & Interaction:**
- [ ] Comment on posts
- [ ] Liking/unliking comments
- [ ] Real-time updates for new comments (Socket.IO)

**Real-time Features:**
- [ ] Real-time new post feed updates
- [ ] Real-time comment updates
- [ ] (Future) Real-time notifications (e.g., new follower, post liked)

**Search & Discovery (Future):**
- [ ] Search for users and posts
- [ ] Hashtags/Topics

---

## Technologies Used

This project leverages a modern web development stack:

**Frontend:**
- **Vue.js 3:** Progressive JavaScript framework for building user interfaces.
- **Nuxt.js 4:** Vue.js meta-framework for Server-Side Rendering (SSR), Static Site Generation (SSG), and enhanced development experience.
- **TypeScript:** Superset of JavaScript for type safety and improved code quality.
- **Pinia:** Intuitive, lightweight, and type-safe state management library for Vue.js.
- **Vue Router:** For client-side routing. (Managed by Nuxt)
- **Axios:** Promise-based HTTP client for making API requests.
- **Socket.IO Client:** For real-time, bidirectional communication.
- **Vite:** Next-generation frontend tooling for fast development.
- **[Add your UI framework here if you use one, e.g., Tailwind CSS, BootstrapVue, Element Plus, Vuetify]**

**Backend:**
- **Node.js:** JavaScript runtime for server-side logic.
- **Express.js:** Fast, unopinionated, minimalist web framework for Node.js APIs.
- **TypeScript:** For type safety in the backend.
- **MongoDB:** NoSQL database for flexible data storage.
- **Mongoose:** Object Data Modeling (ODM) for MongoDB, simplifying database interactions.
- **JSON Web Token (JWT):** For secure user authentication.
- **Bcrypt.js:** For hashing and salting passwords securely.
- **Dotenv:** For loading environment variables from `.env` files.
- **Socket.IO:** For real-time, event-based communication.
- **CORS:** Middleware for enabling Cross-Origin Resource Sharing.

---
### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_GITHUB_USERNAME/CommunityForum.git](https://github.com/YOUR_GITHUB_USERNAME/CommunityForum.git)
    cd CommunityForum
    ```

2.  **Backend Setup:**
    Navigate to the `backend` directory, install dependencies, and set up environment variables.
    ```bash
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory based on `.env.example`:
    ```ini
    # backend/.env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/social_feed_db
    JWT_SECRET=your_super_strong_jwt_secret_key_here
    JWT_EXPIRES_IN=1h
    CLIENT_URL=http://localhost:3000 # Matches Nuxt's default dev server port
    ```

3.  **Frontend Setup:**
    Navigate to the `frontend` directory and install dependencies.
    ```bash
    cd ../frontend
    npm install
    ```
    Create a `.env` file in the `frontend` directory based on `.env.example`:
    ```ini
    # frontend/.env
    VITE_API_BASE_URL=http://localhost:5000/api
    VITE_SOCKET_URL=http://localhost:5000
    ```

### Running the Application

1.  **Start MongoDB:**
    Ensure your MongoDB service is running. If running locally, you might start it via `mongod` command or through its service.

2.  **Start the Backend Server:**
    Open a **new terminal/PowerShell window**, navigate to the `backend` directory, and run:
    ```bash
    cd C:\Users\hardg\Desktop\ComunityForum\CommunityForum\backend
    npm run dev
    ```
    The server should start on `http://localhost:5000`.

3.  **Start the Frontend Development Server:**
    Open another **new terminal/PowerShell window**, navigate to the `frontend` directory, and run:
    ```bash
    cd C:\Users\hardg\Desktop\ComunityForum\CommunityForum\frontend
    npm run dev
    ```
    The Nuxt development server should start on `http://localhost:3000`. Open this URL in your web browser.

You should now have both your backend and frontend running and connected!

---

## Project Structure
