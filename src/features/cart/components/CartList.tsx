import CartItem from "./CartItem";
import Button from "../../../components/Button";
import {FunctionComponent} from "react";
import SVG from '../../../assets/preview.svg'
import {CartItem as CartItemType} from '../../../data/types'
import {useDispatch} from "react-redux";
import {removeCartItem} from "../context/CartActions";
import {Navigate, redirect, useNavigate} from "react-router-dom";



type CartListProps = {
    items: Array<CartItemType>
}

const CartList : FunctionComponent<CartListProps> = ({items}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return <div>
        <div className={'flex justify-between my-5 py-5 px-10 shadow-md rounded font-semibold text-sm'}>
            <p className={'basis-1/12 text-center'}>Назва</p>
            <p className={'basis-1/12 text-center'}>Ціна</p>
            <p className={'basis-1/12 text-center'}>Кількість</p>
            <p className={'basis-1/12 text-center'}>Сума</p>
        </div>
        <ul className={'flex w-full flex-col'}>
            {items && items[0] ?
                items.map(item => <CartItem removeFunc={() => {dispatch(removeCartItem(item._id as string))}} key={item._id} quantity={item.quantity} price={item.price as number} img={item.images ? item.images[0] : SVG}/>)
            :   <h2 className={'m-auto'}>Корзина порожня!</h2>
            }
        </ul>
        <div className={'flex justify-between'}>
            <Button onClick={() => navigate('/')} value={'Повернутись'} styles={'text-black border-2 border-black text-sm font-semibold'}/>
            <Button onClick={() => window.location.reload()} value={'Оновити корзину'} styles={'text-black border-2 border-black text-sm font-semibold'}/>
        </div>
    </div>
}

export default CartList;