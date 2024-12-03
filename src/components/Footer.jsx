/* eslint-disable react/prop-types */

const Footer = ({ total, openModal }) => {
  return (
    <footer>
      <hr />
      <div className="cart-total">
        <h4>
          total <span>€{total.toFixed(2)}</span>
        </h4>
      </div>
      <button className="btn clear-btn" onClick={openModal}>
        clear cart
      </button>
    </footer>
  );
};

export default Footer;
