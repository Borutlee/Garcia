// src/data/menuData.js
// -----------------------------------------------------------------
// Real high-quality food photography URLs for Garcia Restaurant & Cafe.
// -----------------------------------------------------------------

export const categories = [
  {
    id: 'pasta',
    label: 'Pasta',
    count: 10,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'burgers',
    label: 'Burgers',
    count: 14,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'main-courses',
    label: 'Main Courses',
    count: 22,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'salads',
    label: 'Salads',
    count: 12,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'drinks',
    label: 'Drinks',
    count: 12,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'desserts',
    label: 'Desserts',
    count: 15,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
  },
]

export const dishesByCategory = {
  pasta: [
    {
      id: 1,
      name: 'Chicken Alfredo',
      price: 220,
      image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'Penne Arrabbiata',
      price: 180,
      image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281288?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      name: 'Seafood Linguine',
      price: 260,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80',
    },
  ],
  burgers: [
    {
      id: 1,
      name: 'Garcia Classic Burger',
      price: 190,
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'Double Cheese Burger',
      price: 230,
      image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      name: 'BBQ Bacon Burger',
      price: 250,
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=400&q=80',
    },
  ],
  'main-courses': [
    {
      id: 1,
      name: 'Grilled Ribeye Steak',
      price: 420,
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'Herb Roasted Chicken',
      price: 260,
      image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      name: 'Grilled Salmon',
      price: 380,
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80',
    },
  ],
  salads: [
    {
      id: 1,
      name: 'Garcia Garden Salad',
      price: 120,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'Caesar Salad',
      price: 150,
      image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      name: 'Quinoa & Avocado Bowl',
      price: 170,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80',
    },
  ],
  drinks: [
    {
      id: 1,
      name: 'Fresh Orange Juice',
      price: 60,
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'Green Detox Juice',
      price: 70,
      image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      name: 'Iced Spanish Latte',
      price: 85,
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80',
    },
  ],
  desserts: [
    {
      id: 1,
      name: 'Red Velvet Cake',
      price: 110,
      image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'Tiramisu',
      price: 130,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      name: 'Chocolate Lava Cake',
      price: 120,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80',
    },
  ],
}

// Data for the "Special Offers" section
export const offers = [
  {
    id: 1,
    title: 'Lunch Special',
    description: 'On all pasta dishes',
    time: '12:00 PM - 4:00 PM',
    badge: '15% OFF',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Burger Night',
    description: 'Every Monday',
    time: 'From 5:00 PM',
    badge: '20% OFF',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Dessert Treat',
    description: 'Free dessert with any',
    time: 'order over 200 EGP',
    badge: 'FREE',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
  },
]

// Data for the Gallery section
export const galleryImages = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=600&q=80',
]