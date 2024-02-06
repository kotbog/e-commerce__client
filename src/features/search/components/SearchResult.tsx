import {useSelector} from "react-redux";
import {IRootState, Product} from "../../../data/types";
import {NavLink} from "react-router-dom";

const SearchResult = () => {
    const products = useSelector<IRootState, Array<Product>>((state => state.Search.products))

    return <div className={'w-1/3 r-0 absolute top-20 bg-white z-30'}>
        {
            products?.map(item => {
                return <div className={'p-5 border-2'}>
                    <NavLink to={'/product/' + item._id} className={'font-bold'}>
                        {item.name}
                    </NavLink>
                </div>
            })
        }
    </div>
}

export default SearchResult;