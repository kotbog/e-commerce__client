import {FunctionComponent, useRef} from "react";
import {Product as ProductType} from "../data/types";
import Product from "../features/products/components/Product";
import Button from "./Button";
import Slider from 'react-slick'

type TabProps = {
    header: string,
    products: Array<ProductType>
}

const Tab : FunctionComponent<TabProps> = ({header, products}) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        draggable: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const slider = useRef<any>(null);
    return (
        <div className={'my-8'}>
            <div className={'flex justify-between'}>
                <h2 className={'font-bold text-2xl py-5'}>{header}</h2>
                <div className={'flex flex-nowrap items-center'}>
                    <button className={'rounded-full bg-gray-200 p-1 flex items-center justify-center'} onClick={() => slider?.current?.slickNext()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                        </svg>
                    </button>
                    <button className={'rounded-full bg-gray-200 ml-1 p-1 flex items-center justify-center'} onClick={() => slider?.current?.slickPrev()} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"  />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={'py-5'}>
                <Slider ref={slider} {...settings}>
                {
                    products.map(product => <div key={product._id}><Product SKU={product.SKU}
                                 name={product.name}
                                 price={product.price}
                                 id={product._id}
                                 img={product.images && product.images[0]}
                        /></div>)
                }
                </Slider>
            </div>
            <div className={'flex justify-center'}>
                <Button value={'Подивитись всі продукти'} styles={'bg-red-500 text-white'}/>
            </div>
        </div>
    );
};

export default Tab;