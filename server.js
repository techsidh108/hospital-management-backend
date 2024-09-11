import app from "./app.js";
import cloudinary from "cloudinary";
import { config } from "dotenv";


const corsOptions = {
  origin: ['http://localhost:3000', 'https://frotend-hospital-management-system.vercel.app/', 'https://dashboard-hospital-management-system.vercel.app/login'], // Allow only these origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

config({ path: "./config.env" });

console.log(process.env.PORT)
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});