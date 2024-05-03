#!/bin/bash

# Create and switch to the gh-pages branch
git checkout -b gh-pages

# Copy contents of src folder to root
cp -r src/* .

# Add all files
git add .

# Commit changes
git commit -m "Deploy website"

# Push changes to the gh-pages branch
git push origin gh-pages

# Switch back to the main branch
git checkout dev1
