import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    // Calculate total items in the cart
    const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            {/* Brand Logo */}
            <Link to="/" className="logo">
                <span>🍔</span> FoodHub
            </Link>

            {/* Navigation Links */}
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/restaurants">Restaurants</Link>
                </li>
                <li>
                    <Link to="/cart" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>🛒</span> Cart
                        {totalCartItems > 0 && (
                            <span
                                style={{
                                    background: 'var(--primary)',
                                    color: 'white',
                                    borderRadius: '50px',
                                    padding: '2px 8px',
                                    fontSize: '11px',
                                    fontWeight: '800'
                                }}
                            >
                                {totalCartItems}
                            </span>
                        )}
                    </Link>
                </li>

                {/* User Authentication Status */}
                {user ? (
                    <>
                        <li style={{ fontWeight: 700, color: 'var(--dark)' }}>
                            👋 Hi, {user.uName || user.email}
                        </li>
                        <li>
                            <button onClick={handleLogout} className="btn-outline">
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login" className="btn-outline">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="btn-primary">
                                Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;