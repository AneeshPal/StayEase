
# 🏡 StayEase – Property Discovery Platform

StayEase is a full-stack property discovery web application that allows users to explore property listings, create accounts, and interact with properties through reviews. It provides an intuitive platform for discovering stays with location-based exploration and image uploads.

## 🌐 Live Demo

**[Visit StayEase](https://stayease-mi9f.onrender.com)**

## 📂 GitHub Repository

**[View Source Code](https://github.com/AneeshPal/StayEase)**

---

## ✨ Features

- **Property Listings:** Explore and discover available property listings.
- **User Authentication:** Secure user registration and login using Passport.js.
- **Session Management:** Session-based authentication and authorization.
- **Reviews & Ratings:** Users can add and manage property reviews.
- **Image Uploads:** Upload and manage property images using Cloudinary.
- **Location-Based Exploration:** Discover properties based on location.
- **CRUD Operations:** Create, read, update, and delete property listings and reviews.
- **Responsive UI:** User-friendly interface for browsing properties.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express.js | Backend framework |
| MongoDB | Database |
| MongoDB Atlas | Cloud database |
| EJS | Templating engine |
| Passport.js | Authentication |
| Cloudinary | Image storage and management |
| HTML5 & CSS3 | Frontend |

---

## 📸 Project Preview

Explore the live application:

**[StayEase – Live Website](https://stayease-mi9f.onrender.com)**

---

## ⚙️ Installation & Setup

Follow these steps to run StayEase locally.

### 1. Clone the Repository

```bash
git clone https://github.com/AneeshPal/StayEase.git
```

### 2. Navigate to the Project Directory

```bash
cd StayEase
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and configure the environment variables required by the application.

These may include:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

Use the exact variable names expected by your application code. Never commit your actual credentials to GitHub.

### 5. Run the Application

Check the available scripts in `package.json`. If the project uses `npm start`, run:

```bash
npm start
```

Open the local URL shown in your terminal.

---

## 🧠 Key Implementation Highlights

- Developed RESTful CRUD APIs for managing users, properties, and reviews.
- Implemented session-based authentication and authorization using Passport.js and Express middleware.
- Integrated MongoDB Atlas for persistent data storage.
- Integrated Cloudinary for property image uploads and management.
- Built property discovery functionality with location-based exploration.

---

## 🚀 Future Improvements

- Advanced property search and filtering.
- Enhanced map-based property discovery.
- Improved property recommendations.
- Additional user profile features.

---

## 👨‍💻 Author

**Aneesh Pal**

- GitHub: [@AneeshPal](https://github.com/AneeshPal)
- LinkedIn: [Aneesh Pal](https://linkedin.com/in/aneesh-pal-b84014312)

---

## ⭐ Show Your Support

If you find this project interesting, consider giving the repository a ⭐ on GitHub!

**Live Demo:** https://stayease-mi9f.onrender.com

**Repository:** https://github.com/AneeshPal/StayEase
