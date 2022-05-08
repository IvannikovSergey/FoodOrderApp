import React, {useState} from 'react';
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {

    const [isCartVisible, setIsCartVisible] = useState(false)

    const showCart = () => {
        setIsCartVisible(true)
    }

    const hideCart = () => {
        setIsCartVisible(false)
    }

    return <>
        {isCartVisible && <Cart onHideCart={hideCart}/>}
        <Header onShowCart={showCart}/>
        <main>
            <Meals/>
        </main>
    </>
}

export default App;
