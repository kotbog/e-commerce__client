import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useNavigate } from 'react-router-dom';
import React from "react";


type CartTotalProps = {
    subtotal: number, shipping:number, final: boolean
}

const CartTotal = ({subtotal, shipping, final} : CartTotalProps) => {
    const navigate = useNavigate();
    return <div className={'flex w-full justify-between my-3 max-md:flex-wrap'}>
        {!final ?
        <div className={'basis-2/5 flex justify-between items-start p-1 max-sm:basis-full'}>
            <Input placeholder={'Код купону'} styles={'basis-3/5'}/>
            <Button value={'Підтвердити'} styles={'bg-red-500 text-white basis-1/3'}/>
        </div>
            : null}
        <div className={'border-2 rounded p-5 border-black flex-grow min-w-52 mx-2'}>
            <h2 className={'font-bold text-lg'}>Загалом</h2>
            <div className={'flex justify-between border-b-2 border-gray-500 py-3 font-medium'}>
                <p>Підсума:</p>
                <span>${subtotal}</span>
            </div>
            <div className={'flex justify-between border-b-2 border-gray-500 py-3 font-medium'}>
                <p>Доставка:</p>
                <span>${shipping}</span>
            </div>
            <div className={'flex justify-between border-b-2 border-gray-500 py-3 font-medium'}>
                <p>Загальна сума:</p>
                <span>${subtotal + shipping}</span>
            </div>
            {!final ?
            <Button styles={'bg-red-500 text-white m-auto'} value={'Process To Checkout'} onClick={() => navigate('/cart/checkout')}/>
            : null
            }
            </div>
    </div>
}

export default CartTotal;