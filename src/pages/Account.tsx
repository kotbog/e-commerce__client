import withAuth from "../features/authentication/components/withAuth";
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../features/authentication/context/LoginActions";
import {IRootState} from "../data/types";




const Account : FC= () => {
    const dispatch = useDispatch();
    const loggedIn = useSelector<IRootState>(state => state.Login.loggedIn);
    return <div>
        <h1>Account</h1>
        {loggedIn ? <button onClick={() => {
            dispatch(logOut())
        }}>Log out</button> : null}

    </div>
}
export default withAuth(Account);