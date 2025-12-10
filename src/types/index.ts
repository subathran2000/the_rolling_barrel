// Menu Types
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface SubCategory {
  name: string;
  items: MenuItem[];
}

export interface MenuCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  subcategories: SubCategory[];
}

export interface MenuData {
  [key: string]: MenuCategory;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  position?: string;
  date?: string;
  time?: string;
  guests?: string;
}

// Navigation Types
export interface NavLink {
  label: string;
  path: string;
}

export interface MenuCategoryLink {
  label: string;
  path: string;
}

// Feature Types
export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Delivery Platform Types
export interface DeliveryPlatform {
  name: string;
  url: string;
  color: string;
}
