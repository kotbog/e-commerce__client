import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import LoginReducer from "../features/authentication/context/LoginReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./rootSaga";
import SignupReducer from "../features/authentication/context/SignupReducer";
import ProductsReducer from "../features/products/context/ProductsReducer";
import ProductProfileReducer from "../features/products/context/ProductProfileReducer";
import CartReducer from "../features/cart/context/CartReducer";
import CategoryReducer from "../features/category/context/CategoryReducer";
import SearchReducer from "../features/search/context/SearchReducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware();


let rootReducer = combineReducers({
    Login: LoginReducer,
    Signup: SignupReducer,
    Products: ProductsReducer,
    ProductProfile: ProductProfileReducer,
    Cart: CartReducer,
    Category: CategoryReducer,
    Search: SearchReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;