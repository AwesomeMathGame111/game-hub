# AMG Game Hub

A static HTML game hub site that hosts several browser-based games.

## Project Structure

- `index.html` - Main page with game listing and search functionality
- `style.css` - Styles for the hub
- `script.js` - Search and game navigation logic
- `*.html` - Individual game files (2048, CookieClicker, Flappy Bird, Idle Breakout, Mario, Slope, SM64, SRD3D, Tetris)

## Running the App

The app is served as a static site using Python's built-in HTTP server on port 5000:

```
python3 -m http.server 5000 --bind 0.0.0.0
```

## Deployment

Configured as a static deployment with `publicDir: "."`.
