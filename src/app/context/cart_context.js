'use client';
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    function addToCart(item) {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);

            if (existingItemIndex !== -1) {
                // Update existing item
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity = (updatedCart[existingItemIndex].quantity || 1) + 1;
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                return updatedCart;
            } else {
                // Add new item
                const updatedCart = [...prevCart, { ...item, quantity: 1 }];
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                return updatedCart;
            }
        });
    }

    function deleteFromCart(productId) {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter(item => item.id !== productId);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    }

    function incrementQuantity(itemId) {
        setCart((prevCart) => {
            const updatedCart = prevCart.map(item =>
                item.id === itemId
                    ? { ...item, quantity: (item.quantity || 1) + 1 }
                    : item
            );
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    }

    function decrementQuantity(itemId) {
        setCart((prevCart) => {
            const updatedCart = prevCart.map(item =>
                item.id === itemId
                    ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) } // Ensure quantity doesn't go below 1
                    : item
            );
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteFromCart, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCartContext() {
    return useContext(CartContext);
}
