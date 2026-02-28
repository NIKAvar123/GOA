
import { createContext, useState} from "react";
export const AddToCartContext = createContext()
export const AddToCartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = () => {
    }

    return(
        <AddToCartContext.Provider value={{ cart, setCart, addToCart }}>
            { children }
        </AddToCartContext.Provider>
    )
}