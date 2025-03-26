import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

export function loadEnv() {
    const env = process.env.NODE_ENV || 'development';
    const envFile = path.resolve(process.cwd(), `.env.${env}`);

    if (fs.existsSync(envFile)) {
        dotenv.config({ path: envFile });
        console.log(`Using env config: ${envFile}`);
    } else {
        console.warn(`Env file not found: ${envFile}`);
    }
}
