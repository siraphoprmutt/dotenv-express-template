// dev-runner.js
import { spawn } from 'child_process';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// โหลด .env ตาม NODE_ENV
const env = process.env.NODE_ENV || 'development';
const envPath = path.resolve(process.cwd(), `.env.${env}`);

if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
    console.log(`Loaded env: ${envPath}`);
} else {
    console.warn(`Env file not found: ${envPath}`);
}

const useNodemon = process.env.DEBUG === 'true';
const runner = useNodemon ? 'nodemon' : 'node';

console.log(`DEBUG=${process.env.DEBUG} → running ${runner} server.js`);

spawn(runner, ['src/server.js'], {
    stdio: 'inherit',
    shell: true,
});
