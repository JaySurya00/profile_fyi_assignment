'use client'
import { useCartContext } from "../context/cart_context";
export default function MainLayout() {
    const { cart } = useCartContext();
    const itemCount = cart.reduce((total, item) => {
        return total + (item.quantity || 1); 
    }, 0);
    return (
        <header className="container mx-auto p-2">
            <nav className="flex flex-col md:flex-row items-center justify-between md:mx-8">
                <a href="/">
                    <div className="flex items-end text-center md:text-left">
                        <p className="text-xl font-semibold text-red-500">Profile.fyi</p>
                        <p className="text-sm text-gray-500 ml-2 self-end">Jay Surya</p>
                    </div>
                </a>
                <div className="flex justify-between items-center w-full">
                    <div className="order-1 md:order-1 w-full md:w-[500px] mx-auto">
                        <div className="relative mt-4 md:mt-0">
                            <input
                                type="search"
                                className="w-full rounded border border-neutral-300 bg-transparent px-4 py-2 pr-10 text-base leading-6 text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:border-primary focus:shadow-inset dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                id="exampleFormControlInput2"
                                aria-describedby="button-addon2"
                            />
                            <span
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-surface dark:text-white"
                                id="button-addon2"
                            >
                                <img src="search.svg" />
                            </span>
                        </div>
                    </div>
                    <div className="relative order-3 md:order-2 md:ml-auto">
                        <a href="/checkout">
                            <div className="absolute bottom-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full transform translate-x-1 translate-y-1">
                                {itemCount}
                            </div>

                            <img
                                src="shopping_bag.svg"
                                className="w-10 h-10"
                                alt="Shopping Bag"
                            />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
