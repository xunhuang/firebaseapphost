# Firebase App Hosting Skeleton

This repository provides a minimal example of using Firebase App Hosting with a simple Node.js backend and a static front‑end.

The backend exposes a `/health` endpoint that writes a timestamp to a Firestore collection and returns a JSON status. The front‑end page includes a button to trigger the health check and display the result.

## Setup

1. Install dependencies (requires Node.js):
   ```bash
   npm install
   ```
2. Provide Firebase credentials for the Admin SDK. The simplest way in development is to set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to the path of a service account JSON file.
3. Start the server:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser and click **Check Health** to invoke the backend.

This is only a starting point—you can expand the UI and backend logic as needed.
