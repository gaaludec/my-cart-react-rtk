import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/features/cart/cartSlice';
import { closeModal } from '../redux/features/modal/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Do you want to remove all items from your cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => handleConfirm()}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => handleCancel()}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
