const express = require('express');
const admin = require('firebase-admin');
const path = require('path');

// Initialize Firebase Admin SDK using default credentials
// In production, provide proper service account credentials
try {
  admin.initializeApp();
} catch (err) {
  console.error('Failed to initialize Firebase Admin SDK', err);
}

const db = admin.firestore();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', async (req, res) => {
  try {
    // Example Firestore read for health check
    await db.collection('healthChecks').doc('last').set({ timestamp: Date.now() });
  } catch (error) {
    console.error('Health check failed', error);
    res.status(500).json({ status: 'error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
