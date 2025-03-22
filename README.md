
# Portfolio Website

This is a retro-styled portfolio website built with React, Vite, and Tailwind CSS.

## Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch.

### GitHub Pages Setup

The deployment is handled automatically by GitHub Actions. The workflow:
1. Builds your React application
2. Deploys the built files to the `gh-pages` branch
3. GitHub Pages then serves the content from this branch

For custom domain setup:
1. Add your domain in your GitHub repository settings under "Pages"
2. A CNAME file is already included in the repository
3. Set up the necessary DNS records with your domain provider:
   - Type: A, Name: @, Value: 185.199.108.153
   - Type: A, Name: @, Value: 185.199.109.153
   - Type: A, Name: @, Value: 185.199.110.153
   - Type: A, Name: @, Value: 185.199.111.153
   - Type: CNAME, Name: www, Value: ankitsin.in

### Manual Deployment

If you need to deploy manually:
1. Run `npm run build` to create the production build
2. Deploy the contents of the `dist` directory to your hosting service

## Development

- Run `npm install` to install dependencies
- Run `npm run dev` to start the development server
