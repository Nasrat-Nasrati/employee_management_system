# Development Dockerfile for React + Vite
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Expose the Vite dev server port
EXPOSE 5173

# Start the Vite development server and bind to all interfaces
CMD ["npm", "run", "dev", "--", "--host"]
