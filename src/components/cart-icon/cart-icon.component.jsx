import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

const CardIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)

    const toggleIsCartOpne = () => setIsCartOpen(!isCartOpen)

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpne}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}


export default CardIcon;