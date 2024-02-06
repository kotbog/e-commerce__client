import Product from "../features/products/components/Product";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductsAction} from "../features/products/context/ProductsActions";
import {IRootState} from "../data/types";
import {Product as ProductType} from "../data/types"
import Sidebar from "../features/category/components/Sidebar";
import Tab from "../components/Tab";
import {state} from "sucrase/dist/types/parser/traverser/base";
import {toast, ToastContainer, ToastOptions} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {

    const dispatch = useDispatch();

    const products = useSelector<IRootState, Array<ProductType> | undefined>((state) => state.Products.products);
    //const error = useSelector<IRootState, string | undefined>(state => state.Products.errorMessage);

    const showToastMessage = (item: string) => {
        toast.success(<div><span className={'font-semibold'}>{`${item}`}</span> доданий в корзину!</div>, {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: true
        });
    };
    useEffect(() => {
        dispatch(getProductsAction({}));
    }, [dispatch]);
    return <div className={'container mx-auto'}>
        <div className={'flex w-full py-3'}>
            <Sidebar />
            <div className={'flex justify-around flex-wrap gap-10 w-full'}>
                {
                    products && products.map(product => <Product showToast={showToastMessage} key={product._id} SKU={product.SKU}  name={product.name} price={product.price} img={product.images && product.images[0]} id={product._id}/>)
                }
            </div>
        </div>
        {products ? <Tab header={'Наші продукти'} products={products}/> : null}
        <ToastContainer limit={3}/>
    </div>
}
export default Home;