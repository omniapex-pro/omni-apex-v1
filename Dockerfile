FROM node:18-alpine

WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json* ./

# Install dependencies (including dev deps for the build)
RUN npm install

# Copy application code
COPY . .

# Generate Prisma Client (Fixes the database connection)
RUN npx prisma generate

# Build the app
RUN npm run build

# Set production environment
ENV NODE_ENV=production

# Start the app using the command in your package.json
CMD ["npm", "run", "start"]
