'use client'
import { useState } from "react";
import { useCartContext } from "@/app/context/cart_context";
import Toast from "../toast";

const Button_Add_To_Cart = ({ product_id, product_title, product_price, product_image, product_discount, product_mrp }) => {
    const [toastMessage, setToastMessage]= useState('');
    const triggerToast = () => {
        setToastMessage('Item added to cart!');
      };
    
      const handleToastClose = () => {
        setToastMessage(''); // Reset the message when the toast is closed
      };

    const { addToCart } = useCartContext();

    const handleAddToCart = () => {
        const product = {
            id: product_id,
            title: product_title,
            price: Number(product_price).toFixed(2),
            image: product_image,
            discount: Number(product_discount).toFixed(2),
            mrp: Number(product_mrp).toFixed(2),
        }
        addToCart(product);
        triggerToast();
    }
    return (
        <>
            <Toast message={toastMessage} onClose={handleToastClose} />
            <button className="w-full bg-red-500 text-white font-semibold py-2 rounded-sm hover:bg-red-600 transition" onClick={handleAddToCart}>
                Add To Cart
            </button>
        </>
    )
}

export default Button_Add_To_Cart