# Anime & Manga Watcher

This is a web application built with [Next.js](https://nextjs.org) that allows users to explore and discover a wide range of anime and manga. The application fetches data from the [Jikan API](https://jikan.moe), providing users with detailed information about their favorite series.

## Features

- **Browse Anime and Manga**: Explore a vast collection of anime and manga titles.
- **Detailed Information**: View detailed information about each title, including synopsis, episodes, chapters, genres, and more.
- **Responsive Design**: The application is designed to be fully responsive, providing a seamless experience on both desktop and mobile devices.
- **Dynamic Routing**: Utilize Next.js dynamic routing to navigate between different anime and manga pages.
- **Optimized Fonts**: Automatically optimize and load fonts using Next.js font optimization features.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/anime-manga-watcher.git
   cd anime-manga-watcher
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

To start the development server, run:
`bash
    npm run dev
    # or
    yarn dev
    `
Open your browser and navigate to http://localhost:3000 to see the application in action.

### Building for Production

To build the application for production, run
`bash
    npm run build
    #or
    yarn build
    `
After building, you can start the production server with:
`bash
    npm run start
    #or
    yarn start
    `

### Folder Structure

Here's a brief overview of the folder structure:

frontend/
├── app/ # Next.js application pages
│ ├── anime/ # Anime pages
│ ├── manga/ # Manga pages
│ ├── movies/ # Movies pages
│ ├── globals.css # Global styles
│ └── layout.tsx # Root layout component
├── component/ # Reusable components
│ ├── About.tsx # About section
│ ├── AutoPlaySwipeable.tsx # Auto-play swipeable component
│ ├── Card.tsx # Card component for displaying anime/manga
│ ├── Header.tsx # Header component
│ ├── Footer.tsx # Footer component
│ └── ListFetch.tsx # Component for fetching and displaying lists
├── context/ # Context API for managing global state
│ └── anime.tsx # Anime context
├── types.ts # Type definitions
├── .gitignore # Git ignore file
├── package.json # Project metadata and dependencies
├── package-lock.json # Dependency lock file
├── postcss.config.mjs # PostCSS configuration
└── tailwind.config.ts # Tailwind CSS configuration

### Technologies Used

- Next.js: A React framework for server-side rendering and static site generation.
- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for styling.
- Framer Motion: A library for animations in React.
- Axios: A promise-based HTTP client for making API requests.

### Acknowledgments

- Jikan API for providing anime and manga data.
- Next.js for the powerful framework.
- Tailwind CSS for the beautiful styling.
