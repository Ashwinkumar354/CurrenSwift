# CurrenSwift

A modern currency converter built with React, TypeScript, and Vite.

## Features

- Real-time currency conversion
- Clean and modern UI with Tailwind CSS
- Type-safe development with TypeScript
- Fast development experience with Vite

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Setup

1. Clone the repository:
```bash
git clone https://github.com/Ashwinkumar354/CurrenSwift.git
cd CurrenSwift
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your API credentials:
     - `VITE_API_KEY`: Your Exchange Rate API key
     - `VITE_API_BASE_URL`: The API base URL

```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

## Environment Variables

The following environment variables are required:

- `VITE_API_KEY`: Your Exchange Rate API key from [exchangerate-api.com](https://www.exchangerate-api.com/)
- `VITE_API_BASE_URL`: The base URL for the API (e.g., https://v6.exchangerate-api.com/v6)

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios for API calls

## License

MIT
