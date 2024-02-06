import Rating from "./Rating";
import Button from "../../../components/Button";
import {FunctionComponent, useState} from "react";
import ColorPicker from "./ColorPicker";


type ConfigProductProps = {
    name: string,
    desc?: string | "",
    price: number,
    colors?: Array<string>,
    onChangeAmount: (value : number) => void,
    amount: number
};

const ConfigProduct : FunctionComponent<ConfigProductProps> = ({name, desc, price, colors, onChangeAmount, amount}) => {


    return <div className={'flex flex-col basis-2/5 py-10'}>
        <h3 className={'font-bold text-2xl'}>{name}</h3>
        <div className={'flex items-center py-2 justify-start'}>
            <Rating score={4} ratingQuantity={15}/>
            <span className={'block h-7 w-0.5 bg-gray-400 mx-4'}></span>
            <span className={"text-green-500"}>In stock</span>
        </div>
        <div>
            <span className={'text-3xl'}>${price}</span>
        </div>
        <div>
            <p className={'text-justify my-8 max-h-52 overflow-auto pr-2 scrollbar'}>{desc}</p>
        </div>
        <span className={'block h-0.5 w-full bg-gray-300'}></span>
        <ColorPicker colors={colors}/>
        <div className={'flex flex-col w-32'}>
            <div className={'flex flex-row border-2 items-center justify-start'}>
                <button
                    onClick={() => {if(amount > 1) onChangeAmount(amount - 1)}}
                    className={'border-r-2 text-3xl basis-1/4'}
                >-</button>
                <input type="text" className={'basis-1/2 outline-0 text-center box-border w-full'} value={amount} />
                <button
                    onClick={() => {onChangeAmount(amount + 1)}}
                    className={'border-l-2 text-3xl bg-red-500 text-white basis-1/4'}
                >+</button>
            </div>
        </div>
    </div>
}

export default ConfigProduct;