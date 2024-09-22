import app from "./app.js";
import cloudinary from "cloudinary";
import { config } from "dotenv";
import cors from "cors";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

config({ path: "./config.env" });

const corsOptions = {
  origin: ['http://localhost:5173', 'https://frotend-hospital-management-system.vercel.app', 'https://dashboard-hospital-management-system.vercel.app', 'http://localhost:5173', 'http://localhost:5174'], // Allow only these origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));

console.log(process.env.PORT)
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});