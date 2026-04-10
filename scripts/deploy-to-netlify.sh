#!/bin/bash
set -e

echo "Building the project..."
npm run build

echo "Deploying to Netlify..."

args=()
if [[ -n "$NETLIFY_ALIAS" ]]; then
  echo "Using Netlify alias: $NETLIFY_ALIAS"
  args+=(--alias "$NETLIFY_ALIAS")
fi
if [[ -n "$NETLIFY_MESSAGE" ]]; then
  echo "Using Netlify message: $NETLIFY_MESSAGE"
  args+=(--message "$NETLIFY_MESSAGE")
fi

netlify deploy --prod --dir=build "${args[@]}"

echo "✅ Deployment to Netlify completed successfully!"
