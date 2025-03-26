import { loadEnv } from './config/env.js';
import app from './app.js';

loadEnv();

const PORT = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} (${env})`);
});
