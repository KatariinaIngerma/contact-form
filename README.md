# Contact Form 
This is a a React application that displays a dummy contact form. 

# Technologies used
* React with TypeScript.
* TailwindCSS - I used TailwindCSS to simplify style. 
* Vite - build tool.

# Prerequisites
Make sure you have Node.js and npm installed.

# Build instructions

1. Install dependencies using npm:
```
npm install
```
2. Build the application using Vite:
```
npm run build
```
This will generate a production-ready build of the application in the dist directory.

# Serving the Built Files

1. Install the serve package globally using npm.
```
npm install -g serve

```
2. Navigate to the dist directory.
```
cd dist

```
3. Start the server
```
serve
```
This will start a server and provide you with a URL (usually http://localhost:3000) where you can access the production-ready application.

# Bundle size analysis

* I analysed the bundle size using vite-bundle-visualizer.
* Dependencies: I used the react-flags-select dependency, which takes a huge part of the bundle size, but it is necessary for displaying the country flags. To minimize this impact, I employed lazy loading.
* Assets: I utilized SVG files and opted for woff2 font files, as they are better for optimization purposes.
* TailwindCSS: This framework produces smaller CSS files compared to other approaches, making it beneficial for bundle size reduction.
* To further optimize your build, you've incorporated the chunkSplitPlugin from the vite-plugin-chunk-split package. This plugin helps improve chunking by splitting large chunks into smaller ones, which can lead to better performance and reduced bundle size.

# Code Structure and Implementation
The code follows a modular structure, with components organized into separate files within the components directory.

### React Components
* App: The main component responsible for the layout and functionality of the contact form. I did not add state management, because it is a dummy form.
* Heading, TextField, Button, Checkbox: These are reusable components responsible for rendering various parts of the contact form UI, such as headings, input fields, buttons, and checkboxes.
  

