import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import Footer from './Footer';
import { openModal } from '../redux/features/modal/modalSlice';

const CartContainer = () => {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const modalIsOpen = () => dispatch(openModal());

  if (quantity < 1) return <EmptyCart />;

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <Footer total={total} openModal={modalIsOpen} />
    </section>
  );
};

export default CartContainer;
