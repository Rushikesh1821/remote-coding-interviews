# Remote Coding Interviews

**Remote Coding Interviews** is an open-source platform for conducting technical interviews with real-time code collaboration, integrated video calls, and in-app chat. It provides a full-stack reference implementation — frontend (Vite + React) and backend (Node) — that demonstrates how to build a low-latency, collaborative interviewing experience.

---

## Table of Contents
- [Features](#features)
- [Architecture & Tech Stack](#architecture--tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features
- Live collaborative code editor with synchronized edits
- Real-time video/audio using WebRTC
- In-app chat and session management
- Session recording/streaming utilities
- Role-based access control (host/participant)

## Architecture & Tech Stack
- Frontend: React (Vite), custom components for editor, video and UI
- Backend: Node.js, WebSocket/socket.io for real-time comms
- Support libraries: Inngest (background jobs/streams), Piston (code execution API), Axios for HTTP
- Dev tooling: ESLint, Vite, standard Node/npm scripts

## Getting Started
Prerequisites: Node.js (16+), npm or yarn

1. Clone the repo:

   git clone https://github.com/Rushikesh1821/remote-coding-interviews.git
   cd remote-coding-interviews/Remote-Interview-Platform

2. Install dependencies for root, backend, and frontend:

   # root (if applicable)
   npm install

   # backend
   cd backend && npm install

   # frontend
   cd ../frontend && npm install

3. Copy and edit environment files (`frontend/.env`, `backend/.env`) as needed for API keys, ports, and third-party services.

## Development
- Run backend:
  cd backend && npm run dev
- Run frontend:
  cd frontend && npm run dev

Open the app in your browser at the frontend port (default shown in the terminal).

## Contributing
Contributions are welcome — please open an issue to discuss larger changes or submit a PR with clear descriptions and tests where possible.

## License
This project is available under the MIT License. See the `LICENSE` file for details.

## Contact
Maintainer: Rushikesh
Repository: https://github.com/Rushikesh1821/remote-coding-interviews
