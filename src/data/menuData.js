// src/data/menuData.js
// -----------------------------------------------------------------
// Mock data for the Menu section.
// `categories` powers the category tab cards (Pasta, Burgers, ...).
// `dishesByCategory` maps each category id -> list of dish objects
// shown when that category is selected. Prices are in EGP.
//
// All images are generated locally via placeholderImage() (inline SVG,
// no network request) so they always render regardless of network
// restrictions. Swap these for real photo URLs/imports later.
// -----------------------------------------------------------------

import { placeholderImage } from '../utils/placeholder'

export const categories = [
  {
    id: 'pasta',
    label: 'Pasta',
    count: 10,
    image: placeholderImage(300, 300, 'Pasta'),
  },
  {
    id: 'burgers',
    label: 'Burgers',
    count: 14,
    image: placeholderImage(300, 300, 'Burgers'),
  },
  {
    id: 'main-courses',
    label: 'Main Courses',
    count: 22,
    image: placeholderImage(300, 300, 'Main Courses'),
  },
  {
    id: 'salads',
    label: 'Salads',
    count: 12,
    image: placeholderImage(300, 300, 'Salads'),
  },
  {
    id: 'drinks',
    label: 'Drinks',
    count: 12,
    image: placeholderImage(300, 300, 'Drinks'),
  },
  {
    id: 'desserts',
    label: 'Desserts',
    count: 15,
    image: placeholderImage(300, 300, 'Desserts'),
  },
]

export const dishesByCategory = {
  pasta: [
    { id: 1, name: 'Chicken Alfredo', price: 220, image: placeholderImage(300, 300, 'Alfredo', '0b1c15', 'f4efe6') },
    { id: 2, name: 'Penne Arrabbiata', price: 180, image: placeholderImage(300, 300, 'Arrabbiata', '0b1c15', 'f4efe6') },
    { id: 3, name: 'Seafood Linguine', price: 260, image: placeholderImage(300, 300, 'Linguine', '0b1c15', 'f4efe6') },
  ],
  burgers: [
    { id: 1, name: 'Garcia Classic Burger', price: 190, image: placeholderImage(300, 300, 'Classic', '0b1c15', 'f4efe6') },
    { id: 2, name: 'Double Cheese Burger', price: 230, image: placeholderImage(300, 300, 'Cheese', '0b1c15', 'f4efe6') },
    { id: 3, name: 'BBQ Bacon Burger', price: 250, image: placeholderImage(300, 300, 'BBQ', '0b1c15', 'f4efe6') },
  ],
  'main-courses': [
    { id: 1, name: 'Grilled Ribeye Steak', price: 420, image: placeholderImage(300, 300, 'Steak', '0b1c15', 'f4efe6') },
    { id: 2, name: 'Herb Roasted Chicken', price: 260, image: placeholderImage(300, 300, 'Chicken', '0b1c15', 'f4efe6') },
    { id: 3, name: 'Grilled Salmon', price: 380, image: placeholderImage(300, 300, 'Salmon', '0b1c15', 'f4efe6') },
  ],
  salads: [
    { id: 1, name: 'Garcia Garden Salad', price: 120, image: placeholderImage(300, 300, 'Garden', '0b1c15', 'f4efe6') },
    { id: 2, name: 'Caesar Salad', price: 150, image: placeholderImage(300, 300, 'Caesar', '0b1c15', 'f4efe6') },
    { id: 3, name: 'Quinoa & Avocado Bowl', price: 170, image: placeholderImage(300, 300, 'Quinoa', '0b1c15', 'f4efe6') },
  ],
  drinks: [
    { id: 1, name: 'Fresh Orange Juice', price: 60, image: placeholderImage(300, 300, 'Orange', '0b1c15', 'f4efe6') },
    { id: 2, name: 'Green Detox Juice', price: 70, image: placeholderImage(300, 300, 'Green', '0b1c15', 'f4efe6') },
    { id: 3, name: 'Iced Spanish Latte', price: 85, image: placeholderImage(300, 300, 'Latte', '0b1c15', 'f4efe6') },
  ],
  desserts: [
    { id: 1, name: 'Red Velvet Cake', price: 110, image: placeholderImage(300, 300, 'Red Velvet', '0b1c15', 'f4efe6') },
    { id: 2, name: 'Tiramisu', price: 130, image: placeholderImage(300, 300, 'Tiramisu', '0b1c15', 'f4efe6') },
    { id: 3, name: 'Chocolate Lava Cake', price: 120, image: placeholderImage(300, 300, 'Lava Cake', '0b1c15', 'f4efe6') },
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
    image: placeholderImage(400, 300, 'Lunch Special'),
  },
  {
    id: 2,
    title: 'Burger Night',
    description: 'Every Monday',
    time: 'From 5:00 PM',
    badge: '20% OFF',
    image: placeholderImage(400, 300, 'Burger Night'),
  },
  {
    id: 3,
    title: 'Dessert Treat',
    description: 'Free dessert with any',
    time: 'order over 200 EGP',
    badge: 'FREE',
    image: placeholderImage(400, 300, 'Dessert Treat'),
  },
]

// Data for the Gallery section
export const galleryImages = [
  placeholderImage(400, 500, 'Interior'),
  placeholderImage(400, 500, 'Drinks'),
  placeholderImage(400, 500, 'Seating'),
  placeholderImage(400, 500, 'Dessert'),
  placeholderImage(400, 500, 'Outdoor'),
]
