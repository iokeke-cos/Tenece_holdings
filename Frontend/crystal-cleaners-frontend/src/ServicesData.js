
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
    price: 200000,
    quantityLabel: "Number of Offices",
    brief: "A clean office is more than appearances—it is about productivity, safety, and client impressions. Our team uses professional-grade microfiber cloths and HEPA-filter vacuums to capture dust without spreading it. We pay close attention to the details.",
    mainImage: OfficeCleaningImg,
    details: [
      "Dusting and sanitizing desks, chairs, and shelves. ",
      "Specialized cleaning tools for electronics (keyboards, monitors, phones, and other sensitive equipment). ",
      "Disinfecting high-touch points such as doorknobs, light switches, and shared equipment. ",
      "Cleaning restrooms, breakrooms, and meeting rooms. ",
      "Flexible scheduling before or after work hours for minimal disruption.",
      "Boosts workplace hygiene ",
      "Safe handling of sensitive office equipment",
      "Consistent, professional results"

    ],
    paymentLink: "/checkout/office-cleaning"
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    price: 80000,
    quantityLabel: "Number of Windows",
    brief: "Our window cleaning service guarantees streak-free shine every time. Using eco-friendly glass solutions, squeegees, and extension poles, we handle everything from ground-level panes to high and hard-to-reach windows.",
    mainImage: WindowCleaningImg,
  details: [
    "Interior and exterior window washing. ",
    "Careful cleaning of window frames, sills, and tracks. ",
    "Removal of smudges, fingerprints, and hard water spots. ",
    "Hard water spot removal",
    "Specialized equipment to prevent drips or streaks. ",
    "Enhances natural lighting ",
    "Safe, professional-grade methods",
    "No mess left behind"
  ],
  paymentLink: "/checkout/window-cleaning"
  },
{
  id: "carpet-cleaning",
    title: "Carpet Cleaning",
    price: 40000,
    quantityLabel: "Number of Carpets",
    brief:"Carpets trap dust, allergens, and stains — but we go deeper than surface cleaning. With steam cleaners, stain removers, and deodorizing treatments, we restore your carpets to freshness.",
      mainImage: CarpetCleaningImg,
        details: [
          "Hot water extraction (deep cleaning) for stubborn dirt.",
          "Spot treatment for stains and spills (coffee, ink, pet stains).",
          "Safe, pet- and child-friendly cleaning products.",
          "Deodorizing to eliminate odors and refresh the room. ",
          "Fast-dry technology so carpets are ready to use quickly. ",
          "Healthier indoor air quality",
          "Extended carpet life",
          "Visible results you can see and smell"
        ],
          paymentLink: "/checkout/carpet-cleaning"
},
{
  id: "bathroom-cleaning",
    title: "Bathroom Cleaning",
    quantityLabel: "Number of Bathrooms",
    price: 30000,
    brief:"Bathrooms demand more than “just cleaning” — they require true sanitization. Our team uses safe but powerful disinfectants to eliminate germs and odors. ",
      mainImage: BathroomCleaningImg,
        details: [
          "Thorough scrubbing of toilets, sinks, bathtubs, and showers. ",
          "Mold and mildew treatment for tiles and grout. ",
          "Streak-free cleaning of mirrors and glass.",
          "Polishing of faucets, handles, and fixtures.",
          "Floor mopping with germ-killing solutions.",
          "Restocking of tissue, soap, and other essentials (optional add-on).",
          "Odor-free, sparkling bathrooms",
          "Germ-free and hygienic spaces",
          "Professional care for every surface"
        ],
          paymentLink: "/checkout/bathroom-cleaning"
},
{
  id: "bedroom-cleaning",
    title: "Bedroom Cleaning",
    quantityLabel: "Number of Bedrooms",
    price: 25000,
    brief:"Your bedroom should be your comfort zone — fresh, neat, and relaxing. We take extra care with personal items and use anti-dust microfiber cloths and allergy-friendly vacuums for a healthier space.",
      mainImage: BedroomCleaningImg,
        details: [
          "Dusting all surfaces, including nightstands, dressers, and décor.",
          "Changing and neatly arranging bed linens (if requested).",
          "Vacuuming carpets, rugs, and under-bed areas. ",
          "Polishing mirrors, windows, and glass furniture. ",
          "Gentle cleaning of delicate items and electronics. ",
          "Dust and allergy-free environment",
          " Neatly organized and inviting space ",
          "Fresh linens and tidy setup for restful sleep"
        ],
          paymentLink: "/checkout/bedroom-cleaning"
},
{
  id: "kitchen-cleaning",
    title: "Kitchen Cleaning",
    quantityLabel: "Number of Kitchens",
    price: 35000,
    brief:"The kitchen is the heart of every home — and we make sure it is fresh, clean, and foodsafe. Using degreasers, sanitizers, and odor removers, we tackle the toughest kitchen jobs.",
      mainImage: KitchenCleaningImg,
        details: [
          "Degreasing stovetops, hoods, and oven exteriors.",
          "Wiping down and sanitizing countertops, sinks, and backsplashes. ",
          "Cleaning inside and outside of microwaves, fridges, and small appliances.",
          "Mopping and sanitizing floors to remove stains and spills.",
          "Emptying trash bins and removing lingering odors.",
          "Grease-free, sanitized surfaces.",
          "Food-safe cleaning for healthier cooking",
          "Fresh-smelling, spotless environment"
        ],
          paymentLink: "/checkout/kitchen-cleaning"
},
];

export default allServices;