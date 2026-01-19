FROM node:18-alpine

WORKDIR /app

# Install OpenSSL for Prisma compatibility on Alpine
RUN apk add --no-cache openssl

COPY package.json package-lock.json* ./

# Install dependencies
# 'npm ci' is faster and more reliable than 'npm install' for CI/CD/Docker
RUN npm ci

COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the Remix App
RUN npm run build

# Switch to Production for runtime
ENV NODE_ENV=production

# Document that the app listens on port 3000
EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]
