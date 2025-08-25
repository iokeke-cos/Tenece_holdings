import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Default route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Crystal Cleaners API 🚀",
    endpoints: [
      "/home",
      "/about",
      "/services",
      "/faqs",
      "/contact",
      "/pricing"
    ]
  });
});

// Home
app.get("/home", (req, res) => {
  res.json({ title: "Premier House and Office Cleaning Services in the Bay Area" });
});

// About
app.get("/about", (req, res) => {
  res.json({ company: "Crystal Cleaners", mission: "Reliable and affordable cleaning services" });
});

// Services
const services = [
  {
    id: 1,
    name: "Office Cleaning",
    description: "Comprehensive cleaning for office spaces, desks, and common areas.",
    price: "$100"
  },
  {
    id: 2,
    name: "Window Cleaning",
    description: "Streak-free cleaning for all window types, inside and out.",
    price: "$80"
  },
  {
    id: 3,
    name: "Carpet Cleaning",
    description: "Deep carpet cleaning using eco-friendly products.",
    price: "$120"
  },
  {
    id: 4,
    name: "Bathroom Cleaning",
    description: "Sanitization and scrubbing of all bathroom fixtures and surfaces.",
    price: "$60"
  },
  {
    id: 5,
    name: "Bedroom Cleaning",
    description: "Dusting, vacuuming, and organizing bedrooms for comfort and cleanliness.",
    price: "$70"
  },
  {
    id: 6,
    name: "Kitchen Cleaning",
    description: "Degreasing, scrubbing, and disinfecting kitchen surfaces and appliances.",
    price: "$90"
  }
];

// GET /services → list all services
app.get("/services", (req, res) => {
  res.json(services);
});


//GET /services/:id → get a single service by id
app.get("/services/:id", (req, res) => {
  const serviceId = parseInt(req.params.id);
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return res.status(404).json({ error: "Service not found" });
  }

  res.json(service);
});

// FAQs
app.get("/faqs", (req, res) => {
  res.json({
    faqs: [
      "How do I pay for my cleaning service?",
      "Are the cleaning teams trained and supervised?",
      "Will I always have the same cleaning team?",
      "Can my animals be at home while my house is being cleaned?",
      "Is your cleaning service guaranteed?",
      "Do I tip the housecleaners?",
      "What are your rates for house cleaning services?"
    ]
  });
});

// Contact
app.get("/contact", (req, res) => {
  res.json({ phone: "+1 (555) 123-4567", email: "info@crystalcleaners.com" });
});

// Pricing
app.get("/pricing", (req, res) => {
  res.json({
    plans: [
      { name: "Basic Clean", price: "$50" },
      { name: "Deep Clean", price: "$120" },
      { name: "Move-out Clean", price: "$200" }
    ]
  });
});

// Connect DB and start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});