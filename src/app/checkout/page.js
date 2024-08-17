'use client'
import { useState, useEffect } from "react";
import "../globals.css";
import CheckoutCard from "../components/cards/card-checkout";
import OrderDetails from "../components/cards/card-summary";
import { useCartContext } from "../context/cart_context";

export default function Checkout() {
    const { cart } = useCartContext();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (cart !== undefined) {
            setIsLoaded(true);
        }
    }, [cart]);

    if (!isLoaded) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50">
                <div className="text-center">
                    <p className="text-2xl font-semibold text-gray-700 mb-4">Preparing Your Cart...</p>
                    <div className="animate-pulse">
                        <p className="text-lg text-gray-500">Please wait a moment</p>
                    </div>
                </div>
            </div>
        ); // Stylish loading message
    }

    return (
        <div className="p-2 md:grid md:grid-cols-2">
            {cart.length > 0 ? (
                <>
                    <div className="order-1 md:order-2">
                        <OrderDetails />
                    </div>
                    <div className="md:border">
                        {cart.map((item) => (
                            <CheckoutCard
                                key={item.id}
                                product_id={item.id}
                                product_title={item.title}
                                product_discount={item.discount}
                                product_price={item.price}
                                product_image={item.image}
                                product_mrp={item.mrp}
                                product_quantity={item.quantity}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-full col-span-2 p-8 text-center bg-gray-100 rounded-lg">
                    <p className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</p>
                    <p className="text-gray-500 mb-4">Browse our products and add something to your cart!</p>
                    <a
                        href="/"
                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Start Shopping
                    </a>
                </div>
            )}
        </div>
    );
}
