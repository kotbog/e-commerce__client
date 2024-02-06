
export type Product = {
    name: string,
    SKU: number | string,
    desc?: string,
    _id: string | number,
    price: number,
    images?: Array<string>
}
export type User = {
    _id: string,
    first_name: string,
    last_name: string,
    email: string,
    telephone?: string,
    address?: string
}


export type CartItem = Partial<Product> & {quantity: number}

export type initResponse = {
    error: boolean,
    message: string
}

export interface ILoginState {
    loading: boolean,
    loggedIn: boolean,
    errorMessage?: string,
    user?: User
}
export interface ISignupState {
    success: boolean,
    message?: string
}
export interface IProducts {
    products?: Array<Product>,
    errorMessage: '' | string | undefined
}
export interface IProductProfile {
    product?: Product,
    errorMessage?: string,
    isLoading: boolean
}

interface ICartState  {
    items: Array<Partial<Product> & {quantity: number}>
    errorMessage?: string,
    isLoading: boolean
}

interface ICategoryState {
    categories: Array<{name:string, _id: string}>,
    loading: boolean,
    errorMessage?: string
}
interface ISearchState {
    products: Array<Product>,
    errorMessage?: string
}

export interface IRootState {
    Login: ILoginState,
    Signup: ISignupState,
    Products: IProducts,
    ProductProfile: IProductProfile,
    Cart: ICartState,
    Category: ICategoryState,
    Search: ISearchState
}


