import './checkout.styles.scss';

import { useContext } from "react"
import { CartContext } from "../../components/contexts/cart.context"
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


const Checkout = () => {

    const { cartItems, total } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => <CheckoutItem cartItem={cartItem} key={cartItem.id} />)
            }

            <span className='total'>Total: {`$${total}`}</span>
        </div>
    )
}

export default Checkout;