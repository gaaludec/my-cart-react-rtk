import { useSelector } from 'react-redux';
import { CartIcon } from '../icons.jsx';
// import { NavbarWrapper } from '../assets/wrappers/navbar.js';

const Navbar = () => {
  const { quantity } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>my cart</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{quantity}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
