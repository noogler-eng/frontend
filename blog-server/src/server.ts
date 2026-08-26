import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/health-check', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Server is running'
    })
})

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})