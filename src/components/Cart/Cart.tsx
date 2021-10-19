import { Button } from '@mui/material';
import { uiActions } from '../../store/uiSlice';
import { useAppDispatch, useAppSelector } from '../types/TypedReduxSelectors';
import Modal from '../UI/Modal/Modal';

const Cart = () => {
    const coupons = useAppSelector(state=>state.cart.coupons);
    const dispatch = useAppDispatch();
    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    }
    const purchaseItemsHandler = () => {
        console.log("items purchased");
    }
    
    const couponItems = coupons.map((coupon,index)=> <div key={index}>{coupon.title}</div>)
    return (
        <Modal onBDClick={toggleCartHandler}>
            {couponItems}
            <Button variant="contained" onClick={purchaseItemsHandler}>Purchase</Button>
            <Button variant="contained" onClick={toggleCartHandler}>Close</Button>
        </Modal>
    );
}
export default Cart;