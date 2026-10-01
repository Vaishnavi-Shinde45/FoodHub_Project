import React from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
    { name: 'Biryani', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=250&h=250&fit=crop' },
    { name: 'Pizzas', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=250&h=250&fit=crop' },
    { name: 'Burgers', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=250&h=250&fit=crop' },
    { name: 'South Indian', img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=250&h=250&fit=crop' },
    { name: 'Chinese', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=250&h=250&fit=crop' },
    { name: 'Desserts', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=250&h=250&fit=crop' },
    { name: 'Italian', img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=250&h=250&fit=crop' },
    { name: 'Healthy', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=250&h=250&fit=crop' }
];

const Home = () => {
    return (
        <div>
            {/* HERO SECTION */}
            <section className="hero">
                <div>
                    <div style={{ display: 'inline-block', background: 'rgba(255,82,0,0.1)', color: 'var(--primary)', padding: '6px 14px', borderRadius: '50px', fontSize: '13px', fontWeight: 800, marginBottom: '16px' }}>
                        ⚡ Super Fast 30-Min Delivery
                    </div>
                    <h1>
                        Delicious food,
                        <span>delivered right to your door.</span>
                    </h1>
                    <p className="hero-desc">
                        Explore hand-crafted cuisines from the best restaurants across the city. Lightning fast delivery, seamless payments, and pure satisfaction.
                    </p>
                    <Link to="/restaurants" className="btn-primary" style={{ padding: '14px 34px', fontSize: '16px' }}>
                        Order Food Now →
                    </Link>
                </div>
                <div className="hero-img-container">
                    <img
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&h=600&fit=crop"
                        alt="Delicious Feast"
                        className="hero-img"
                    />
                    <div className="floating-badge">
                        <span style={{ fontSize: '26px' }}>🛵</span>
                        <div>
                            <div style={{ fontWeight: 800, fontSize: '14px' }}>Live Order Tracking</div>
                            <div style={{ fontSize: '12px', color: 'var(--text-light)' }}>Track driver in real-time</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOD CATEGORIES HORIZONTAL SCROLL */}
            <div className="categories-container">
                <div className="section-header">
                    <h2 className="section-title">What's on your mind?</h2>
                </div>
                <div className="categories-scroll">
                    {CATEGORIES.map((cat, idx) => (
                        <Link to={`/restaurants?category=${cat.name}`} key={idx} className="category-circle-item">
                            <img src={cat.img} alt={cat.name} className="category-circle-img" />
                            <span className="category-circle-name">{cat.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* WHY CHOOSE US */}
            <div className="container" style={{ padding: '40px 20px 80px' }}>
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>Why FoodHub?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                    <div style={{ background: 'white', padding: '30px', borderRadius: '18px', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ fontSize: '36px', marginBottom: '12px' }}>🍔</div>
                        <h3 style={{ fontWeight: 800, marginBottom: '8px' }}>Handpicked Menus</h3>
                        <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>Top quality restaurants audited strictly for taste and hygiene.</p>
                    </div>
                    <div style={{ background: 'white', padding: '30px', borderRadius: '18px', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ fontSize: '36px', marginBottom: '12px' }}>⚡</div>
                        <h3 style={{ fontWeight: 800, marginBottom: '8px' }}>30 Min Guarantee</h3>
                        <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>Our dedicated fleet ensures hot food delivered under 30 minutes.</p>
                    </div>
                    <div style={{ background: 'white', padding: '30px', borderRadius: '18px', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ fontSize: '36px', marginBottom: '12px' }}>💳</div>
                        <h3 style={{ fontWeight: 800, marginBottom: '8px' }}>Easy Payments</h3>
                        <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>Multiple payment options including Cash on Delivery, Cards, and UPI.</p>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="footer">
                <div className="footer-grid">
                    <div>
                        <div className="footer-brand">🍔 FoodHub</div>
                        <p style={{ fontSize: '14px', lineHeight: 1.6, maxWidth: '340px' }}>
                            Delivering happiness to your doorstep everyday. Connecting hungry bellies with premium kitchens.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '14px' }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                            <Link to="/restaurants">Restaurants</Link>
                            <Link to="/cart">Cart</Link>
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '14px' }}>Contact</h4>
                        <p style={{ fontSize: '14px' }}>support@foodhub.com</p>
                        <p style={{ fontSize: '14px', marginTop: '6px' }}>+91 98765 43210</p>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', fontSize: '13px' }}>
                    © 2026 FoodHub Technologies Pvt. Ltd. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Home;