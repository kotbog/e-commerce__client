import {useSelector} from "react-redux";
import {IRootState, User} from "../data/types";
import CheckoutForm from "../features/cart/components/CheckoutForm";
import CartTotal from "../features/cart/components/CartTotal";
import Button from "../components/Button";
import {CartItems} from "../features/cart/data/types";

import SVG from "../assets/preview.svg";
import {calcTotal} from "../features/authentication/services/calc_total";

const Checkout = () => {
    const user = useSelector<IRootState, User | undefined>(state => state.Login.user);
    const cartItems = useSelector<IRootState, CartItems>(state => state.Cart.items);

    return <div className={'min-h-screen container m-auto flex max-md:flex-wrap'}>
        {!user ? <CheckoutForm/> :
            <div className={'basis-1/2'}>
                <span><h2 className={'font-semibold'}>First name: </h2>{user.first_name}</span>
                <span><h2 className={'font-semibold'}>Last name: </h2>{user.last_name}</span>
                <span><h2 className={'font-semibold'}>E-mail: </h2>{user.email}</span>
                <span><h2 className={'font-semibold'}>Phone number: </h2>{user.telephone}</span>
                <span><h2 className={'font-semibold'}>Address: </h2>{user.address}</span>
                <Button value={'Confirm'} styles={'bg-red-600 text-white'}/>
            </div>
        }
        <div className={'basis-1/2 flex-grow'}>
            <ul>
                {cartItems ? cartItems.map(item => {
                    return <li className={'flex items-center w-full flex-row py-4 px-3'} key={item._id}>
                        <div className={'basis-[100px] flex justify-center'}>
                            <img
                                src={item.images ? item.images[0] : SVG}
                                alt={`product-img-${item._id}`}
                                className={'h-20 object-contain'}
                            />
                        </div>
                        <span className={'font-semibold text-sm ml-4'}>{item.name}</span>
                        <span className={'font-bold text-sm ml-auto'}>${item.price}</span>
                    </li>
                }) : null}
            </ul>
            <CartTotal subtotal={calcTotal(cartItems)} shipping={10} final={true}/>
        </div>
    </div>
}

export default Checkout;