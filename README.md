# Elite Quiz Documentation

This is the documentation site for Elite Quiz, built with [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Getting Started

### Prerequisites

- Node.js version 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd elite-quiz-docs

# Install dependencies
npm install
```

### Local Development

```bash
# Start the development server
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
# Build the website
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
# Build and deploy to server
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
# Build and deploy to GitHub pages
GIT_USER=<Your GitHub username> npm run deploy
```

## Documentation Structure

- `/docs`: Contains the markdown files for the documentation

  - `/docs/introduction.md`: General introduction
  - `/docs/web/`: Web application documentation
  - `/docs/errors/`: Common errors and solutions
  - `/docs/support.md`: Support information
  - `/docs/rating.md`: Feedback and rating
  - `/docs/contactus.md`: Contact information

- `/static`: Contains static assets like images
  - `/static/img/`: Images used in the documentation

## Customization

- Edit `docusaurus.config.js` to customize site configuration
- Edit `sidebars.js` to customize documentation sidebar
- Edit `/src/pages/index.js` to customize the landing page
- Edit `/src/css/custom.css` to customize styling
