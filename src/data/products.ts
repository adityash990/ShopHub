export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  featured: boolean;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    price: 299,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Electronics",
    rating: 4.8,
    featured: true,
    stock: 50
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Track your health and fitness with this advanced smartwatch featuring heart rate monitoring.",
    price: 249,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Electronics",
    rating: 4.6,
    featured: true,
    stock: 30
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable organic cotton t-shirt available in multiple colors.",
    price: 29,
    image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Fashion",
    rating: 4.4,
    featured: false,
    stock: 100
  },
  {
    id: 4,
    name: "Modern Table Lamp",
    description: "Sleek and modern table lamp perfect for any contemporary home or office space.",
    price: 89,
    image: "https://images.pexels.com/photos/1112597/pexels-photo-1112597.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Home & Garden",
    rating: 4.5,
    featured: true,
    stock: 25
  },
  {
    id: 5,
    name: "Professional Camera",
    description: "High-resolution camera perfect for professional photography and content creation.",
    price: 899,
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Electronics",
    rating: 4.9,
    featured: true,
    stock: 15
  },
  {
    id: 6,
    name: "Yoga Mat Pro",
    description: "Premium yoga mat with excellent grip and cushioning for all your fitness needs.",
    price: 49,
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Sports",
    rating: 4.7,
    featured: false,
    stock: 75
  },
  {
    id: 7,
    name: "Designer Backpack",
    description: "Stylish and functional backpack perfect for work, travel, or everyday use.",
    price: 79,
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Fashion",
    rating: 4.3,
    featured: false,
    stock: 40
  },
  {
    id: 8,
    name: "Smart Home Speaker",
    description: "Voice-controlled smart speaker with premium sound quality and smart home integration.",
    price: 149,
    image: "https://images.pexels.com/photos/4790594/pexels-photo-4790594.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Electronics",
    rating: 4.6,
    featured: false,
    stock: 60
  },
  {
    id: 9,
    name: "Luxury Skincare Set",
    description: "Complete skincare routine with premium organic ingredients for radiant, healthy skin.",
    price: 159,
    image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Beauty",
    rating: 4.8,
    featured: true,
    stock: 35
  },
  {
    id: 10,
    name: "Ergonomic Office Chair",
    description: "Premium ergonomic office chair with lumbar support and adjustable height for maximum comfort.",
    price: 399,
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Home & Garden",
    rating: 4.7,
    featured: false,
    stock: 20
  },
  {
    id: 11,
    name: "Wireless Gaming Mouse",
    description: "High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons.",
    price: 89,
    image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Electronics",
    rating: 4.5,
    featured: false,
    stock: 45
  },
  {
    id: 12,
    name: "Artisan Coffee Beans",
    description: "Premium single-origin coffee beans roasted to perfection for the ultimate coffee experience.",
    price: 24,
    image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Food & Beverage",
    rating: 4.9,
    featured: true,
    stock: 80
  },
  {
    id: 13,
    name: "Bluetooth Portable Speaker",
    description: "Waterproof portable speaker with 360-degree sound and 24-hour battery life.",
    price: 129,
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Electronics",
    rating: 4.4,
    featured: false,
    stock: 55
  },
  {
    id: 14,
    name: "Minimalist Wallet",
    description: "Sleek leather wallet with RFID protection and minimalist design for modern professionals.",
    price: 59,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Fashion",
    rating: 4.6,
    featured: false,
    stock: 65
  }
];

// Helper function to get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

// Helper function to get top-rated products
export const getTopRatedProducts = (limit: number = 5) => {
  return products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};