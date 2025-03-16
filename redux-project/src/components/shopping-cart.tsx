import { Provider } from "react-redux";
import { store } from "../lib/store";
import ProductList from "../components/product-list";
import Cart from "../components/cart";

const ShoppingCart = () => {
  return (
    <Provider store={store}>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2'>
                <ProductList />
            </div>
            <div>
                <Cart />
            </div>
        </div>
    </Provider>
  )
}

export default ShoppingCart;