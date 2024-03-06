# Use Node.js 14 LTS as base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the backend service
CMD ["node", "server.js"]
