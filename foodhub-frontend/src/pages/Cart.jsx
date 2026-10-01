import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { placeOrder } from '../services/api';

const Cart = () => {
    const { cart, addToCart, decreaseQty, removeFromCart, clearCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    const handleCheckout = async () => {
        if (!user) {
            alert('Please login to place an order!');
            navigate('/login');
            return;
        }

        const orderData = {
            userID: user.uId,
            restaurantID: cart[0]?.restaurantID || 1,
            totalAmount: total,
            paymentMethod: 'COD',
            items: cart.map(i => ({
                menuID: i.menuID,
                quantity: i.quantity,
                itemTotal: i.price * i.quantity
            }))
        };

        try {
            await placeOrder(orderData);
            clearCart();
            alert('🎉 Order Placed Successfully!');
            navigate('/');
        } catch (err) {
            alert('Failed to place order: ' + (err.response?.data?.error || err.message));
        }
    };

    if (cart.length === 0) {
        return (
            <div className="container" style={{ textAlign: 'center', marginTop: '60px' }}>
                <h2>Your Cart is Empty! 🛒</h2>
                <p style={{ color: 'var(--text-light)', margin: '16px 0 24px' }}>Add some delicious food from restaurants.</p>
                <Link to="/" className="btn-primary">Browse Restaurants</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '24px' }}>Your Shopping Cart</h1>
            <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: 'var(--shadow)' }}>
                {cart.map(item => (
                    <div key={item.menuID} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #eee' }}>
                        <div>
                            <div style={{ fontWeight: 'bold' }}>{item.itemName}</div>
                            <div style={{ color: 'var(--text-light)', fontSize: '13px' }}>₹{item.price} each</div>
                        </div>

                        {/* Quantity Controls (+/-) */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <button onClick={() => decreaseQty(item.menuID)} className="btn-outline" style={{ padding: '2px 10px' }}>-</button>
                            <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                            <button onClick={() => addToCart(item)} className="btn-outline" style={{ padding: '2px 10px' }}>+</button>
                        </div>

                        <div style={{ fontWeight: 'bold', width: '80px', textAlign: 'right' }}>
                            ₹{item.price * item.quantity}
                        </div>

                        <button onClick={() => removeFromCart(item.menuID)} style={{ background: 'none', border: 'none', color: '#e53e3e', cursor: 'pointer' }}>
                            ✕
                        </button>
                    </div>
                ))}

                <div style={{ marginTop: '20px', textAlign: 'right' }}>
                    <div>Subtotal: ₹{subtotal.toFixed(2)}</div>
                    <div>Taxes (5%): ₹{tax.toFixed(2)}</div>
                    <div style={{ fontSize: '20px', fontWeight: '800', margin: '10px 0' }}>Total: ₹{total.toFixed(2)}</div>
                    <button onClick={handleCheckout} className="btn-primary" style={{ padding: '12px 28px', fontSize: '16px' }}>
                        Place Order (COD)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;