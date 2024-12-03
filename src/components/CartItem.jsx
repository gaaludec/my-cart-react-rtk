/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { ChevronDown, ChevronUp } from '../icons.jsx';
import {
  removeItem,
  updateQuantity,
  // increase,
  // decrease,
} from '../redux/features/cart/cartSlice.js';

const CartItem = ({ id, img, title, price, quantity }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    // dispatch(increase({ id }));
    dispatch(updateQuantity({ id, type: 'increase' }));
  };

  const handleDecrease = () => {
    if (quantity === 1) {
      dispatch(removeItem(id));
      return;
    }
    dispatch(updateQuantity({ id, type: 'decrease' }));
    // dispatch(decrease({ id }));
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">€{price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={handleIncrease}>
          <ChevronUp />
        </button>
        <p className="amount">{quantity}</p>
        <button className="amount-btn" onClick={handleDecrease}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
