# Inventory Management API

Express-based REST API for inventory management.

## Prerequisites

- Node.js (v14 or higher)
- pnpm

## Installation

1. Install dependencies:

```bash
pnpm install
```

2. Create a `.env` file in the root directory (optional):

```
PORT=3000
NODE_ENV=development
```

## Running the Server

### Development Mode

```bash
pnpm run dev
```

### Production Mode

```bash
pnpm start
```

The server will start on `http://localhost:3000`

## API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check

## Project Structure

```
├── server.js          # Main Express application
├── package.json       # Dependencies and scripts
├── .env              # Environment variables (not committed)
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

## Development

To use hot-reloading during development, the project uses `nodemon`. Make sure it's installed:

```bash
pnpm run dev
```

Changes to `server.js` will automatically restart the server.
