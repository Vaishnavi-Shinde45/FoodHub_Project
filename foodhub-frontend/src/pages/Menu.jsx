import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMenuByRestaurant, fetchRestaurantById } from '../services/api';
import { CartContext } from '../context/CartContext';
import { getMenuItemImage, getRestaurantImage } from '../utils/imageHelper';

const Menu = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetchRestaurantById(id).then(res => setRestaurant(res.data)).catch(console.error);
        fetchMenuByRestaurant(id).then(res => setMenuItems(res.data)).catch(console.error);
    }, [id]);

    return (
        <div className="container" style={{ maxWidth: '900px' }}>
            {restaurant && (
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center', background: 'white', padding: '24px', borderRadius: '20px', boxShadow: 'var(--shadow-sm)', marginBottom: '32px' }}>
                    <img src={getRestaurantImage(restaurant)} alt={restaurant.name} style={{ width: '120px', height: '120px', borderRadius: '16px', objectFit: 'cover' }} />
                    <div>
                        <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '6px' }}>{restaurant.name}</h1>
                        <p style={{ color: 'var(--text-light)', fontSize: '14px', marginBottom: '8px' }}>{restaurant.cuisineType} • {restaurant.address}</p>
                        <span className="badge-rating">★ {restaurant.rating || '4.5'}</span>
                    </div>
                </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <h2 className="section-title">Recommended Menu</h2>
                <Link to="/cart" className="btn-outline" style={{ fontSize: '13px' }}>View Cart →</Link>
            </div>

            {/* Menu Items with unique dish photos and green ADD overlay */}
            <div>
                {menuItems.map(item => (
                    <div className="menu-card" key={item.menuID}>
                        <div>
                            <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--dark)' }}>{item.itemName}</div>
                            <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary)', margin: '4px 0 8px' }}>₹{item.price}</div>
                            <p style={{ fontSize: '13px', color: 'var(--text-light)', lineHeight: 1.5 }}>
                                {item.description || "Prepared fresh upon order with high quality authentic ingredients."}
                            </p>
                        </div>
                        <div className="menu-img-wrap">
                            <img
                                src={getMenuItemImage(item)}
                                alt={item.itemName}
                                className="menu-img"
                            />
                            <button
                                onClick={() => addToCart({ ...item, restaurantID: id })}
                                className="btn-add-on-img"
                            >
                                ADD +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;