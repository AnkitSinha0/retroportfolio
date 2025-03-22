
# Portfolio Website

This is a retro-styled portfolio website built with React, Vite, and Tailwind CSS.

## Deployment

This project is configured to automatically deploy to GoDaddy hosting when changes are pushed to the main branch.

### GitHub Actions Setup

To enable automatic deployment to GoDaddy, you need to set the following secrets in your GitHub repository:

1. Go to your GitHub repository
2. Click on "Settings" → "Secrets and variables" → "Actions"
3. Add the following secrets:
   - `FTP_SERVER`: Your GoDaddy FTP server address (usually ftp.yourdomain.com)
   - `FTP_USERNAME`: Your GoDaddy FTP username
   - `FTP_PASSWORD`: Your GoDaddy FTP password
   - `FTP_SERVER_DIR`: The directory on the server where files should be uploaded (e.g., `/public_html/` or `/`)

The GitHub Action will:
1. Build your React application
2. Deploy the built files to GoDaddy via FTP

### Manual Deployment

If you need to deploy manually:
1. Run `npm run build` to create the production build
2. Upload the contents of the `dist` directory to your GoDaddy hosting

## Development

- Run `npm install` to install dependencies
- Run `npm run dev` to start the development server
