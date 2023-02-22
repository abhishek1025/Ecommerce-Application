
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button/button.component';
import { addItemToCart } from '../store/cart/cart.reducer';
import { selectCartItems } from '../store/cart/cart.selector';
import './product-card.styles.scss';


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const dispatch = useDispatch();


    const addProductToCart = () => dispatch(addItemToCart(product))

    return (
        <div className='product-card-container'>
            <img src={imageUrl.replace(' ', '')} alt={name} />

            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
        </div>
    )
}

export default ProductCard;