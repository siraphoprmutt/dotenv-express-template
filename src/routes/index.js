import express from 'express';

const router = express.Router();

router.get('/env', (req, res) => {
    res.status(200).json({
        data: {
            port: process.env.PORT,
            db_host: process.env.DB_HOST,
            db_user: process.env.DB_USER,
            db_pass: process.env.DB_PASS,
            env: process.env.NODE_ENV,
            debug: process.env.DEBUG,
        }
    });
});

export default router;
