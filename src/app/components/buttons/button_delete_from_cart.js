'use client'

import { useCartContext } from "@/app/context/cart_context";

const Button_Delete_From_Cart = ({ product_id }) => {
    const { deleteFromCart } = useCartContext();

    const handleDeleteFromCart = () => {
        deleteFromCart(product_id);
    }

    return (
        <button
            className="flex items-center justify-center w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
            onClick={handleDeleteFromCart}
        >
            Remove From Cart
        </button>
    );
}

export default Button_Delete_From_Cart;
