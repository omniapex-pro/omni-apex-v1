FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

# Install all dependencies (including dev tools for building)
RUN npm install

COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the Remix App
RUN npm run build

# Switch to Production for runtime
ENV NODE_ENV=production

CMD ["npm", "run", "start"]
