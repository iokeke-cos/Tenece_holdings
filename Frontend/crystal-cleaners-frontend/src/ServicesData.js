
import OfficeCleaningImg from './assets/OfficeCleaningImg.png';
import WindowCleaningImg from './assets/WindowCleaningImg.png';
import CarpetCleaningImg from './assets/CarpetCleaningImg.png';
import BathroomCleaningImg from './assets/BathroomCleaningImg.png';
import BedroomCleaningImg from './assets/BedroomCleaningImg.png';
import KitchenCleaningImg from './assets/KitchenCleaningImg.png';


const allServices = [
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    mainImage: OfficeCleaningImg,
    details: [
      "Daily/Weekly/Monthly cleaning schedules",
      "Dusting and sanitizing all surfaces",
      "Vacuuming and mopping floors",
      "Restroom cleaning and sanitization",
      "Trash removal and recycling",
      "Window and glass cleaning",
      "Customized cleaning plans available"
    ],
    paymentLink: "/checkout/office-cleaning"
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    mainImage: WindowCleaningImg,
    details: [
      "Streak-free window cleaning",
      "Interior and exterior windows",
      "Screen cleaning",
      "Hard water spot removal",
      "Residential and commercial properties",
      "Skylight cleaning available"
    ],
    paymentLink: "/checkout/window-cleaning"
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    mainImage: CarpetCleaningImg,
    details: [
      "Deep steam cleaning",
      "Stain and odor removal",
      "Eco-friendly cleaning solutions",
      "Fast drying times",
      "Area rug cleaning",
      "Protective treatments available"
    ],
    paymentLink: "/checkout/carpet-cleaning"
  },
  {
    id: "bathroom-cleaning",
    title: "Bathroom Cleaning",
    mainImage: BathroomCleaningImg,
    details: [
      "Thorough disinfection of all surfaces",
      "Tile and grout scrubbing",
      "Toilet, sink, and shower cleaning",
      "Mirror polishing",
      "Restocking supplies (upon request)",
      "Mold and mildew treatment"
    ],
    paymentLink: "/checkout/bathroom-cleaning"
  },
  {
    id: "bedroom-cleaning",
    title: "Bedroom Cleaning",
    mainImage: BedroomCleaningImg,
    details: [
      "Dusting all furniture and surfaces",
      "Vacuuming/mopping floors",
      "Mirror and window cleaning",
      "Bed making and linen change (upon request)",
      "Trash removal",
      "Organization services available"
    ],
    paymentLink: "/checkout/bedroom-cleaning"
  },
  {
    id: "kitchen-cleaning",
    title: "Kitchen Cleaning",
    mainImage: KitchenCleaningImg,
    details: [
      "Countertop and sink sanitization",
      "Appliance exterior cleaning (oven, microwave, fridge)",
      "Stovetop and backsplash degreasing",
      "Floor sweeping and mopping",
      "Cabinet exterior wiping",
      "Dishwashing (upon request)"
    ],
    paymentLink: "/checkout/kitchen-cleaning"
  },
];

export default allServices;