# Stage 1: Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json* ./

# Install all dependencies
RUN npm install

# Copy source code and configuration
COPY . .

# Run test suite and build production bundle
RUN npm test
RUN npm run build

# Stage 2: Production runtime stage
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Install serve to deliver production static SPA assets
RUN npm install -g serve

# Copy built distribution from builder
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1

CMD ["serve", "-s", "dist", "-l", "3000"]
