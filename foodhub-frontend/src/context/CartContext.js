import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const addToCart = (item) => {
        setCart((prev) => {
            const exists = prev.find((i) => i.menuID === item.menuID);
            let updated;
            if (exists) {
                updated = prev.map((i) =>
                    i.menuID === item.menuID ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                updated = [...prev, { ...item, quantity: 1 }];
            }
            localStorage.setItem('cart', JSON.stringify(updated));
            return updated;
        });
    };

    const decreaseQty = (menuID) => {
        setCart((prev) => {
            const item = prev.find((i) => i.menuID === menuID);
            let updated;
            if (item && item.quantity > 1) {
                updated = prev.map((i) =>
                    i.menuID === menuID ? { ...i, quantity: i.quantity - 1 } : i
                );
            } else {
                updated = prev.filter((i) => i.menuID !== menuID);
            }
            localStorage.setItem('cart', JSON.stringify(updated));
            return updated;
        });
    };

    const removeFromCart = (menuID) => {
        setCart((prev) => {
            const updated = prev.filter((i) => i.menuID !== menuID);
            localStorage.setItem('cart', JSON.stringify(updated));
            return updated;
        });
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, decreaseQty, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};