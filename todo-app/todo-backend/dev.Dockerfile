FROM node:24

WORKDIR /usr/src/app

# Install dependencies in the image so mounted source does not need to run install
COPY package*.json ./
RUN npm ci

# Copy remaining files (will be shadowed by a volume in dev compose)
COPY . .

EXPOSE 3000

# Use the dev script which runs nodemon
CMD ["npm", "run", "dev"]
