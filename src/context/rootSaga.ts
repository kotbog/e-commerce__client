import {all, fork} from "@redux-saga/core/effects";
import {rootLoginSaga} from "../features/authentication/context/LoginSaga";
import {signupWatcher} from "../features/authentication/context/SignupSaga";
import {rootSagaProducts} from "../features/products/context/ProductsSaga";
import {rootCartSaga} from "../features/cart/context/CartSaga";
import {rootCategorySaga} from "../features/category/context/CategorySaga";
import {rootSearchSaga} from "../features/search/context/SearchSaga";

export default function* rootSaga() {
    yield all([
        fork(rootSagaProducts),
        fork(signupWatcher),
        fork(rootCartSaga),
        fork(rootLoginSaga),
        fork(rootCategorySaga),
        fork(rootSearchSaga)
    ]);
}