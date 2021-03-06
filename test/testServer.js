import express from 'express';
import { configureServer } from '../dist/server/config';
import staticFileRoutes from '../dist/server/routes/staticFileRoutes';
// import authRoutes from '../src/server/routes/authRoutes';

const app = express();

configureServer(app);

// Set up routes
staticFileRoutes(app);
// authRoutes(app);

export default app;
