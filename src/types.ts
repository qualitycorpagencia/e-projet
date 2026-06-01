export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
  imageUrl?: string;
}

export interface DifferentialItem {
  id: string;
  metric: string;
  label: string;
  description: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  client: string;
  location: string;
  year: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}
