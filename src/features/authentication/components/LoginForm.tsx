import Input from "../../../components/Input";
import {useFormik} from "formik";
import Button from "../../../components/Button";
import {Navigate, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
//import {logIn} from "../context/LoginActions";
import {IRootState} from "../../../data/types";
import {logIn} from "../context/LoginActions";


const validate  = (values : {email: string | "", password: string | ""})  => {
    const errors : {email?: string | "", password?: string | ""} = {};
    if(!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
}

const LoginForm = () => {
    const dispatch = useDispatch();

    const loginError = useSelector<IRootState, string | undefined>(state => state.Login.errorMessage);

    const loginSuccess : boolean = useSelector<IRootState, boolean>(state => state.Login.loggedIn);

    const formik = useFormik({
        initialValues: {
            email:'',
            password: ''
        },
        validate,
        onSubmit: values => {
            dispatch(logIn(values.email, values.password));
            console.log('Submitted' + values)
        }
    });

    if(loginSuccess) return <Navigate to={'/'}/>;
    
    return (<form onSubmit={formik.handleSubmit} className={'flex flex-col m-auto w-64'}>


            {formik.errors.email && formik.touched.email
            ? <div className={'text-sm text-red-500'}>{formik.errors.email}</div>
            : null
        }

        {loginError && <div className={'text-sm text-red-500'}>{loginError}</div>}
            <Input
                placeholder={'Type your email'}
                name={'email'}
                type={'text'} value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                inValid={formik.errors.email && formik.touched.email}
            />
            <Input placeholder={'Type your password'}
                   name={'password'}
                   type={'password'} value={formik.values.password}
                   onChange={formik.handleChange}
            />
            <Button value={'Sign In'} type={'submit'} styles={'bg-red-500 text-white'}/>
            <div className={'text-sm mt-2 text-center'}>Doesn't have an account? <NavLink to={'/signup'} className={'underline'}>Sign Up</NavLink></div>
    </form>)

}

export default LoginForm;