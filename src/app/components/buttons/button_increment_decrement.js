import { useCartContext } from "@/app/context/cart_context"


export default function ButtonIncrementDecrement({product_id, product_quantity=1}) {
    const {incrementQuantity, decrementQuantity}= useCartContext();
    const handleIncrement= ()=>{
        incrementQuantity(product_id);
    }
    const handleDecrement= ()=>{
        decrementQuantity(product_id);
    }
    return (
        <>
            <button onClick={handleIncrement} type="button" id="decrement-button"className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <img src="add.svg" />
            </button>
            <input type="text" id="quantity-input" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={product_quantity} required />
            <button onClick={handleDecrement} type="button" id="increment-button" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <img src="minus.svg" />
            </button>
        </>
    )
}