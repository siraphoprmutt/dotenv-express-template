import express from 'express';
import path from 'path';
import routes from './routes/index.js';

const publicPath = path.join(process.cwd(), 'public');

const app = express();

// เสิร์ฟ static ที่ /public
app.use(express.static(publicPath));

// Routes อื่น ๆ
app.use('/api/', routes);

export default app;
