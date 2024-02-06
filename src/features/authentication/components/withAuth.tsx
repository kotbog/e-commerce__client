import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../data/types";
import {ComponentType, FC, useEffect} from "react";
import {verifyUser} from "../context/LoginActions";
import Preloader from "../../../components/Preloader";
import {redirect} from "react-router-dom";


function withAuth<T>(WrappedComponent: ComponentType<T>)  {
    return (props: any) => {
        const verified = useSelector<IRootState>(state => state.Login.loggedIn);
        const loading = useSelector<IRootState>(state => state.Login.loading);
        const dispatch = useDispatch();
        console.log(verified)
        useEffect(() => {
            dispatch(verifyUser());
            console.log('verified')
        }, [dispatch]);
        if (loading) return <Preloader/>

        return <WrappedComponent {...props}/>
    }
}





export default withAuth;