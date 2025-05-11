# Personal Portfolio Website

A modern and responsive personal portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ✨ Smooth animations and transitions
- 🎯 Project showcase
- 📝 Contact form
- 🌙 Dark theme

## Tech Stack

- **Frontend:**
  - React.js with TypeScript
  - Material-UI
  - Framer Motion
  - Tailwind CSS
  - React Router

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd personal-portfolio
   ```

2. Install dependencies:
   ```bash
   # Install backend dependencies
   npm install

   # Install frontend dependencies
   cd frontend
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Run the development server:
   ```bash
   # Run backend and frontend concurrently
   npm run dev

   # Or run them separately:
   # Backend
   npm run server

   # Frontend
   npm run client
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

## Project Structure

```
personal-portfolio/
├── backend/
│   ├── server.js
│   └── ...
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.tsx
│   │   └── ...
│   └── package.json
├── package.json
└── README.md
```

## Customization

1. Update the projects in `frontend/src/components/Projects.tsx`
2. Modify the about section in `frontend/src/components/About.tsx`
3. Update the contact form in `frontend/src/components/Contact.tsx`
4. Customize colors and styling in `frontend/tailwind.config.js`

## Deployment

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy to your preferred hosting platform (e.g., Heroku, Vercel, Netlify)

## License

This project is open source and available under the [MIT License](LICENSE). 