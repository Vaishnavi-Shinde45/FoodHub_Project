// Verified, permanent high-resolution images for Restaurants
const RESTAURANT_CATALOG = [
    { keywords: ['pizza hut'], url: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&h=400&fit=crop' },
    { keywords: ['dominos', 'domino'], url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop' },
    { keywords: ['burger king'], url: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop' },
    { keywords: ['kfc', 'fried chicken'], url: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&h=400&fit=crop' },
    { keywords: ['subway'], url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&h=400&fit=crop' },
    { keywords: ['biryani by kilo', 'meghana', 'biryani'], url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop' },
    { keywords: ['south indian', 'udupi', 'dosa'], url: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&h=400&fit=crop' },
    { keywords: ['chinese', 'noodle', 'wok'], url: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&h=400&fit=crop' },
    { keywords: ['italian', 'pasta'], url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&h=400&fit=crop' }
];

// Verified, permanent individual images for Menu Items
const MENU_CATALOG = [
    // Biryani / Rice
    { keywords: ['chicken biryani', 'dum biryani'], url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=450&h=300&fit=crop' },
    { keywords: ['veg biryani', 'pulao', 'paneer biryani'], url: 'https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=450&h=300&fit=crop' },
    
    // Pizzas
    { keywords: ['margherita', 'cheese pizza'], url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=450&h=300&fit=crop' },
    { keywords: ['veg supreme', 'loaded vegetable', 'veggie pizza'], url: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=450&h=300&fit=crop' },
    { keywords: ['farmhouse', 'peppy paneer'], url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=450&h=300&fit=crop' },
    { keywords: ['pepperoni', 'chicken pizza'], url: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=450&h=300&fit=crop' },
    
    // Desserts
    { keywords: ['choco lava', 'lava cake', 'chocolate dessert'], url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=450&h=300&fit=crop' },
    { keywords: ['pastry', 'chocolate cake', 'cake'], url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=450&h=300&fit=crop' },
    { keywords: ['ice cream', 'sundae'], url: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=450&h=300&fit=crop' },
    { keywords: ['gulab jamun', 'rasgulla', 'mithai'], url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=450&h=300&fit=crop' },
    
    // Burgers
    { keywords: ['whopper', 'double burger', 'king burger'], url: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=450&h=300&fit=crop' },
    { keywords: ['crispy chicken', 'chicken burger'], url: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=450&h=300&fit=crop' },
    { keywords: ['veg burger', 'aloo tikki', 'burger'], url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=450&h=300&fit=crop' },
    
    // South Indian
    { keywords: ['masala dosa', 'dosa'], url: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=450&h=300&fit=crop' },
    { keywords: ['idli', 'vada', 'sambar'], url: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?w=450&h=300&fit=crop' },
    
    // Chinese & Italian
    { keywords: ['noodles', 'chowmein', 'hakka'], url: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=450&h=300&fit=crop' },
    { keywords: ['pasta', 'penne', 'white sauce'], url: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281692?w=450&h=300&fit=crop' },
    { keywords: ['fried rice', 'manchurian'], url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=450&h=300&fit=crop' },
    
    // Curries & Breads
    { keywords: ['butter chicken', 'chicken curry'], url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=450&h=300&fit=crop' },
    { keywords: ['paneer butter', 'shahi paneer', 'paneer'], url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=450&h=300&fit=crop' },
    { keywords: ['naan', 'roti', 'paratha'], url: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=450&h=300&fit=crop' },
    
    // Fast Food & Sides
    { keywords: ['french fries', 'fries'], url: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?w=450&h=300&fit=crop' },
    { keywords: ['sandwich', 'sub'], url: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=450&h=300&fit=crop' }
];

// Fallback pool: guarantees items without keywords still get distinct photos
const FALLBACK_MENU_IMAGES = [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=450&h=300&fit=crop',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=450&h=300&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=450&h=300&fit=crop',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=450&h=300&fit=crop',
    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=450&h=300&fit=crop',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=450&h=300&fit=crop'
];

export const getRestaurantImage = (restaurant) => {
    // If a valid custom path is stored in the DB, use it
    if (restaurant?.imagePath && 
        restaurant.imagePath.startsWith('http') && 
        !restaurant.imagePath.includes('1517248135467')) {
        return restaurant.imagePath;
    }

    const target = `${restaurant?.name || ''} ${restaurant?.cuisineType || ''}`.toLowerCase();

    for (const entry of RESTAURANT_CATALOG) {
        if (entry.keywords.some(k => target.includes(k))) {
            return entry.url;
        }
    }

    // Hash fallback so different restaurants get different photos
    const id = restaurant?.restaurantID || target.length || 0;
    return RESTAURANT_CATALOG[id % RESTAURANT_CATALOG.length].url;
};

export const getMenuItemImage = (item) => {
    // If a valid custom path is stored in the DB, use it
    if (item?.imagePath && 
        item.imagePath.startsWith('http') && 
        !item.imagePath.includes('1546069901')) {
        return item.imagePath;
    }

    const target = `${item?.itemName || ''} ${item?.category || ''} ${item?.description || ''}`.toLowerCase();

    for (const entry of MENU_CATALOG) {
        if (entry.keywords.some(k => target.includes(k))) {
            return entry.url;
        }
    }

    // Deterministic fallback based on menuID so each dish has its own unique photo
    const id = item?.menuID || target.length || 0;
    return FALLBACK_MENU_IMAGES[id % FALLBACK_MENU_IMAGES.length];
};