#!/bin/bash
set -e

echo "Building the project..."
npm run build

echo "Deploying to Netlify..."
netlify deploy --prod --dir=build --message="Deployment from GitHub Actions"

echo "✅ Deployment to Netlify completed successfully!"
