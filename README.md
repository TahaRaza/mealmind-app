# MealMind App 🍽️

> A smart recipe recommendation app that helps you decide what to cook based on available ingredients, with family meal planning features.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React Native](https://img.shields.io/badge/React%20Native-0.72-61DAFB.svg)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-47A248.svg)

## 🎯 Features

- **Recipe Recommendations**: Get personalized recipe suggestions based on available ingredients
- **Ingredient Matching**: Smart algorithm matches your ingredients with recipe database
- **Family Meal Planning**: Manage family members with dietary preferences and allergies
- **Recipe History**: Keep track of previously cooked recipes
- **Multi-Cuisine Support**: Diverse recipes from Pakistani, Italian, Asian, and more cuisines
- **Difficulty Levels**: Recipes categorized by cooking difficulty (Easy, Medium, Hard)
- **Allergy Management**: Filter recipes based on family allergies and dietary restrictions

## 🏗️ Project Structure

```
mealmind-app/
├── frontend/          # React Native mobile application
├── backend/           # Node.js Express API server
├── docs/             # Project documentation
└── README.md         # You are here
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- React Native CLI
- MongoDB (local or cloud)
- Android Studio / Xcode for mobile development

### Installation

```bash
# Clone the repository
git clone https://github.com/TahaRaza/mealmind-app.git
cd mealmind-app

# Install all dependencies (root, frontend, backend)
npm run install-all

# Set up environment variables
cp backend/.env.example backend/.env
# Edit backend/.env with your MongoDB URI and other configurations

# Seed the database with sample recipes
npm run backend:seed

# Start development servers (both frontend and backend)
npm run dev
```

### Individual Services

```bash
# Backend only (API server on port 5000)
npm run backend:dev

# Frontend only (React Native Metro bundler)
npm run frontend:dev
```

## 📱 Mobile App (Frontend)

Built with React Native for cross-platform mobile development.

**Key Features:**

- Ingredient-based recipe search
- Recipe browsing and filtering
- Family member management
- Recipe history tracking
- Beautiful, intuitive UI

**Tech Stack:**

- React Native
- TypeScript
- React Navigation
- AsyncStorage
- RESTful API integration

## 🔧 Backend API

RESTful API built with Node.js and Express, connected to MongoDB.

**API Endpoints:**

- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/search?ingredients=tomato,onion` - Search by ingredients
- `GET /api/recipes/cuisine/:cuisine` - Filter by cuisine
- `POST /api/members` - Add family member
- `GET /api/history` - Get recipe history

**Tech Stack:**

- Node.js & Express
- MongoDB & Mongoose
- RESTful API design
- Environment-based configuration

## 🌍 Deployment

**Backend:** Deployed on AWS EC2 with PM2 process manager
**Database:** MongoDB Atlas cloud database
**Frontend:** React Native app for iOS and Android

## 🔄 Development Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make your changes and commit
git add .
git commit -m "feat: add new feature description"

# Push and create pull request
git push origin feature/your-feature-name
```

## 📚 Documentation

- [API Documentation](docs/API.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Development Setup](docs/DEVELOPMENT.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Taha Raza**

- GitHub: [@TahaRaza](https://github.com/TahaRaza)
- LinkedIn: [Your LinkedIn Profile]

## 🙏 Acknowledgments

- Recipe data sourced from various culinary traditions
- Built with modern web and mobile technologies
- Inspired by the joy of cooking and family meals

---

**Happy Cooking!** 🍳✨
