import CartList from "../features/cart/components/CartList";
import CartTotal from "../features/cart/components/CartTotal";
import {useDispatch, useSelector} from "react-redux";
import {CartItem, IRootState, User} from "../data/types";
import {useEffect} from "react";
import {getCartItems} from "../features/cart/context/CartActions";
import Preloader from "../components/Preloader";
import withAuth from "../features/authentication/components/withAuth";
import {calcTotal} from "../features/authentication/services/calc_total";
const Cart = () => {
    const dispatch = useDispatch();
    const loggedIn = useSelector<IRootState, boolean>(state => state.Login.loggedIn);
    const user = useSelector<IRootState, User | undefined>(state => state.Login.user);
    const loading = useSelector<IRootState, boolean>(state => state.Cart.isLoading);

    useEffect(() => {
        if(loggedIn && user) dispatch(getCartItems(user._id));
    }, [dispatch]);
    const items =
        useSelector<IRootState,Array<CartItem>>
        ((state) => state.Cart.items);

    if(loading) return <Preloader/>



    return <div className={'container m-auto'}>
        <div className={'min-h-full'}>
            <CartList items={items}/>
            <CartTotal shipping={10} subtotal={calcTotal(items)} final={false}/>
        </div>

    </div>
}

export default withAuth(Cart);