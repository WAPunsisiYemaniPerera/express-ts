import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello, welcome to our API!');
});

router.post('/', (req: Request, res: Response) => {
    const { name } = req.body;
    res.send(`Hello, ${name}! Welcome to our API!`);
});

export default router;  // <--- important
