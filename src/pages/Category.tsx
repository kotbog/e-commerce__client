import {useDispatch, useSelector} from "react-redux";
import {IRootState, Product as ProductType} from "../data/types";
import {state} from "sucrase/dist/types/parser/traverser/base";
import {useEffect} from "react";
import {getProductsAction} from "../features/products/context/ProductsActions";
import {useParams} from "react-router-dom";
import Product from "../features/products/components/Product";
import Preview from "../assets/preview.svg"

const Category = () => {
    const products = useSelector<IRootState, Array<ProductType> | undefined>(state => state.Products.products);
    const dispatch = useDispatch();
    const {category} = useParams();
    console.log(category);
    useEffect(() => {
        dispatch(getProductsAction({category: category}))
    }, [dispatch]);
    return <div className={'container m-auto'}>
        <h2 className={'text-xl my-3'}>Products in category: <span className={'font-bold'}>{category}</span></h2>
        <div className={'flex w-full justify-around h-full'}>
            {
                products && products[0] ? products.map(item => {
                    return <Product
                        key={item._id}
                        name={item.name}
                        price={item.price}
                        id={item._id}
                        SKU={item.SKU}
                        img={item.images ? item.images[0] : Preview}
                    />
                }) : <div className={'flex flex-col items-center h-full'}>
                    <h4 className={'text-center text-xl font-bold'}>Not Found!</h4>
                    <h2>There is no products with such category!</h2>
                </div>
            }
        </div>
    </div>
}

export default Category;