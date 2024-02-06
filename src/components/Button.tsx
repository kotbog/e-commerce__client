import React, {FunctionComponent} from "react";

type ButtonProps = React.ComponentPropsWithRef<"button"> & {
    styles?: string,
    value: string
};
const Button : FunctionComponent<ButtonProps> = ({value, styles, ...props})  => {
    return <button className={`block font-medium px-7 text-sm py-3 rounded my-2 ${styles}`} {...props}>
        {value}
    </button>
}
export default Button;