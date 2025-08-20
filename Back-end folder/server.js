import express from "express";
const app = express();
const PORT = 3000;

// Root route
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
app.get("/services", (req, res) => {
  res.json({
    services: [
      "Office Cleaning",
      "Window Cleaning",
      "Carpet Cleaning",
      "Bathroom Cleaning",
      "Bedroom Cleaning",
      "Kitchen Cleaning"
    ]
  });
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

app.listen(PORT, () => {
  console.log(`Crystal Cleaners API running at http://localhost:${PORT}`);
});
