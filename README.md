# Movie App Frontend

A modern Angular application for browsing, searching, and managing movie collections with playlist functionality. This frontend interfaces with the [MovieApp backend](https://github.com/teads-sess-2025/MovieApp), which is built using Java and Spring Boot. It provides an intuitive experience for movie enthusiasts to discover films and organize them into custom playlists.

This project was developed as part of the Teads Summer School program.

## Features

- **Movie Browsing**: Browse through a comprehensive collection of movies
- **Advanced Search**: Search for movies by title with real-time results
- **Movie Details**: View detailed information about individual movies including:
  - Movie metadata (title, release date, genres, etc.)
  - Production details (budget, revenue, production companies)
  - Ratings and reviews (vote average, vote count)
  - Movie overview and tagline
- **Playlist Management**:
  - Create custom playlists
  - Add movies to playlists
  - View playlist contents
  - Organize your favorite movies
- **Responsive Design**: Modern, mobile-friendly interface built with Angular Material
- **Real-time Updates**: Dynamic content loading with Angular signals

## Technology Stack

- **Framework**: Angular 20.1.0
- **UI Components**: Angular Material 20.1.0
- **HTTP Client**: Angular HttpClient for API communication
- **State Management**: Angular Signals for reactive state management
- **Routing**: Angular Router with component input binding
- **Styling**: CSS with Angular Material theming
- **Build Tool**: Angular CLI with modern build system
- **Testing**: Jasmine & Karma for unit testing

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js**: Version 20.19 or higher
- **npm**: Comes with Node.js
- **Angular CLI**: Install globally with `npm install -g @angular/cli`

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd movie_app_frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Backend URL

The application is configured to connect to a backend API. You can modify the backend URL in `src/app/app.config.ts`:

```typescript
// For local development
export const BACKEND_BASE_URL = "http://localhost:8080";

// For production (uncomment and modify as needed)
// export const BACKEND_BASE_URL = 'https://your-backend-url.com';
```

### 4. Start the Development Server

```bash
npm start
# or
ng serve
```

The application will be available at `http://localhost:4200/`. The app will automatically reload when you make changes to the source files.

## Project Structure

```
src/
├── app/
│   ├── browse-view/          # Movie browsing interface
│   ├── home-view/            # Landing page
│   ├── movie-view/           # Individual movie details
│   ├── playlist-view/        # Playlist management
│   ├── playlist-movie-view/  # Movies within a playlist
│   ├── playlist-dialog/      # Playlist selection dialog
│   ├── search-view/          # Movie search functionality
│   ├── header/               # Navigation header
│   ├── footer/               # Application footer
│   ├── types/                # TypeScript type definitions
│   │   ├── movie.ts          # Movie data model
│   │   └── playlist.ts       # Playlist data model
│   ├── app.config.ts         # Application configuration
│   ├── app.routes.ts         # Routing configuration
│   └── app.ts                # Main application component
├── styles.css                # Global styles
└── index.html                # Main HTML template
```

## Available Routes

- `/` - Home page
- `/browse` - Browse all movies
- `/search` - Search for movies
- `/movie/:id` - View movie details
- `/playlists` - Manage playlists
- `/playlists/:id` - View playlist contents

## Development Commands

### Start Development Server

```bash
npm start
# or
ng serve
```

### Build for Production

```bash
npm run build
# or
ng build
```

### Build with Watch Mode

```bash
npm run watch
# or
ng build --watch --configuration development
```

### Run Unit Tests

```bash
npm test
# or
ng test
```

### Code Generation

```bash
# Generate a new component
ng generate component component-name

# Generate a new service
ng generate service service-name

# See all available schematics
ng generate --help
```

## API Integration

The application integrates with a backend API for the following operations:

### Movies

- `GET /api/movies` - Fetch all movies
- `GET /api/movies/n/{name}` - Search movies by name

### Playlists

- `GET /api/playlists` - Fetch user playlists
- `POST /api/playlists` - Create new playlist
- `GET /api/playlists/{id}` - Fetch playlist contents

## UI Components

The application uses Angular Material components for a consistent and modern user experience:

- Material Design components
- Responsive layout
- Dark/Light theme support
- Accessible interface

## Testing

The project includes comprehensive testing setup:

- **Unit Tests**: Jasmine framework with Karma test runner
- **Component Testing**: Angular testing utilities
- **Coverage Reports**: Built-in code coverage reporting

Run tests with:

```bash
ng test
```

## Build and Deployment

### Production Build

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory, optimized for production with:

- Minified code
- Tree shaking
- AOT compilation
- Bundle optimization

### Deployment

The `dist/` folder contains all files needed to deploy the application to any static hosting service.

## License

This project is part of the Teads Summer School program.

## Support

For support and questions:

- Check the [Angular Documentation](https://angular.dev)
- Review the [Angular CLI Documentation](https://angular.dev/tools/cli)
- Open an issue in the repository
