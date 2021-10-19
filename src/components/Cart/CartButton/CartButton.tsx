import { uiActions } from "../../../store/uiSlice";
import { theme } from "../../../styles/LightTheme";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppDispatch } from "../../types/TypedReduxSelectors";

const CartButton = () => {
    const dispatch = useAppDispatch();
    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    }
    return (
        <span style={{cursor: "pointer"}} title="Cart" onClick={toggleCartHandler}>
            <ShoppingCartIcon sx={{ color: theme.colors.main, fontSize: theme.size.icons }} />
        </span>
    );
}
export default CartButton;