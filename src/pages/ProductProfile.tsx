import ConfigProduct from "../features/products/components/ConfigProduct";
import PhotoPreview from "../features/products/components/PhotoPreview";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProductByIdAction} from "../features/products/context/ProductsActions";
import Preloader from "../components/Preloader";
import {IRootState, User} from "../data/types";
import {Product} from "../data/types";
import Button from "../components/Button";
import {addCartItemAuth, addCartItemLocal} from "../features/cart/context/CartActions";
import {toast, ToastContainer} from "react-toastify";

const ProductProfile = () => {
    let {id} = useParams();

    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch();


    const product = useSelector<IRootState, Product | undefined>(state => state.ProductProfile.product);
    const isLoading = useSelector<IRootState, boolean>(state => state.ProductProfile.isLoading)
    const isAuth = useSelector<IRootState, boolean>(state => state.Login.loggedIn);
    const user = useSelector<IRootState, User | undefined>(state => state.Login.user);



    useEffect(() => {
        if (id) dispatch(getProductByIdAction(id));
    }, [dispatch, id]);

    if(isLoading) return <Preloader/>

    const showToastMessage = (item: string) => {
        toast.success(<div><span className={'font-semibold'}>{`${item}`}</span> доданий в корзину!</div>, {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: true
        });
    };

    function handlePurchase (item : Product) {
        const productWithQuantity = {...item, quantity: amount};
        if(!isAuth && !user?._id) dispatch(addCartItemLocal(productWithQuantity))
        else if(user?._id) dispatch(addCartItemAuth(productWithQuantity, user._id))
        showToastMessage(item.name);
    }

    return <div className={'container m-auto'}>
        {product ?
            <div className={'flex max-md:flex-wrap max-md:justify-center'}>
                <PhotoPreview images={product.images}/>
                <div className={'basis-1/2 max-lg:px-5 max-md:basis-full mb-10'}>
                    <ConfigProduct
                        name={product.name}
                        desc={product.desc}
                        price={product.price}
                        colors={['green', 'red']}
                        onChangeAmount={(value=> {setAmount(value)})}
                        amount={amount}
                    />
                    <Button onClick={() => { handlePurchase(product)} } value={'Add to cart'} styles={'bg-red-500 text-white'}/>
                </div>
                <ToastContainer limit={3}/>
            </div>
            : <p>Product not found</p>

        }

    </div>
}

export default ProductProfile;