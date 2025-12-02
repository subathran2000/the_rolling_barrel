// Restaurant Information Constants
export const RESTAURANT_INFO = {
  name: "The Rolling Barrel",
  tagline: "Good Food. Great Vibes. Everyone's Welcome!",
  subtitle: "Heart & Grill on Taunton Rd W",
  website: "rollingbarrel.ca",
  email: "info@therollingbarrel.ca",
  phone: "905-743-0722",
  phoneFormatted: "(905) 743-0722",
  address: {
    street: "462 Taunton Rd W",
    city: "Oshawa",
    province: "ON",
    postalCode: "L1L 0W1",
    country: "Canada",
    full: "462 Taunton Rd W, Oshawa, ON L1L 0W1, Canada",
    googleMapsUrl:
      "https://maps.google.com/?q=462+Taunton+Rd+W,+Oshawa,+ON+L1L+0W1,+Canada",
  },
  social: {
    facebook:
      "https://www.facebook.com/people/The-Rolling-Barrel/61573017651458",
    instagram:
      "https://www.instagram.com/rollingbarrelrestaurant?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    tiktok: "https://www.tiktok.com/@rolling.barrel",
  },
  delivery: {
    uberEats:
      "https://www.ubereats.com/ca/store/the-rolling-barrel/XqIxAHDqX7CAMMUdN0YO1A",
  },
  onlineOrdering: {
    // Add the online ordering link here when available
    link: "", // Will be updated later
    enabled: false,
  },
  hours: {
    monday: "8:00 AM - 10:00 PM",
    tuesday: "8:00 AM - 10:00 PM",
    wednesday: "8:00 AM - 10:00 PM",
    thursday: "8:00 AM - 10:00 PM",
    friday: "8:00 AM - 11:00 PM",
    saturday: "9:00 AM - 11:00 PM",
    sunday: "9:00 AM - 9:00 PM",
  },
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Menu', path: '/menu' },
  { label: 'Specials', path: '/specials' },
  { label: 'Our Stories', path: '/stories' },
  { label: 'Contact', path: '/contact' }
];

export const MENU_CATEGORIES = [
  { id: "breakfast", label: "Breakfast", path: "/menu/breakfast" },
  { id: "main", label: "Main Course", path: "/menu/main" },
  { id: "drinks", label: "Drinks", path: "/menu/drinks" },
  { id: "desserts", label: "Desserts", path: "/menu/desserts" },
  { id: "kids", label: "Kids Menu", path: "/menu/kids" },
];
