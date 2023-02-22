import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../store/cart/cart.selector';
import { setIsCartOpen } from '../store/cart/cart.reducer';

const CardIcon = () => {
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    const dispatch = useDispatch();

    const toggleIsCartOpne = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpne}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}


export default CardIcon;