import React, {FunctionComponent} from "react";


type InputProps = React.ComponentPropsWithRef<"input"> & {
    inValid?: boolean | "" | undefined,
    styles?: string
};

const Input : FunctionComponent<InputProps> = ({inValid, styles, ...props}) => {
    return <input
        {...props}
        className={`${styles} py-2 px-2 border-2 rounded my-2 ` + (inValid ? 'border-red-500' : 'border-gray-500')}
    />
}
export default Input;