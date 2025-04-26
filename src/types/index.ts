export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  featured: boolean;
  benefits: string[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  completed: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}